function securityHeaders(cache = 'no-store, max-age=0') {
  return { 'Cache-Control': cache, 'Referrer-Policy': 'no-referrer', 'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'DENY' };
}

function allowedOrigin(request, env) {
  const origin = request.headers.get('Origin');
  if (!origin) return null;
  if (origin === env.ALLOWED_ORIGIN || /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin)) return origin;
  return false;
}

function corsHeaders(request, env, methods = 'GET, PUT, OPTIONS') {
  const origin = allowedOrigin(request, env);
  return origin ? { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': methods, 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Max-Age': '86400', Vary: 'Origin' } : {};
}

function json(data, status = 200, headers = {}, cache) {
  return new Response(JSON.stringify(data), { status, headers: { ...securityHeaders(cache), 'Content-Type': 'application/json; charset=utf-8', ...headers } });
}

function normalize(row = {}) {
  return {
    enabled: Boolean(row.enabled),
    clientId: String(row.client_id ?? ''),
    slots: {
      catalogue: String(row.catalogue_slot ?? ''),
      guide: String(row.guide_slot ?? ''),
      offer: String(row.offer_slot ?? ''),
    },
    consentReady: Boolean(row.consent_ready),
    updatedAt: Number(row.updated_at || 0) * 1000,
    updatedBy: String(row.updated_by ?? ''),
  };
}

function validClient(value) { return /^ca-pub-\d{10,20}$/.test(value); }
function validSlot(value) { return /^\d{6,20}$/.test(value); }

async function authorizeAdmin(request, env, fetchImpl) {
  const match = (request.headers.get('Authorization') ?? '').match(/^Bearer\s+(.+)$/i);
  if (!match) return null;
  const response = await fetchImpl('https://api.github.com/user', { headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${match[1]}`, 'User-Agent': 'GratuitPourLesDevs-Monetization-Admin', 'X-GitHub-Api-Version': '2022-11-28' } });
  if (!response.ok) return null;
  const user = await response.json();
  const allowed = String(env.ALLOWED_GITHUB_LOGINS ?? '').split(',').map((login) => login.trim().toLowerCase()).filter(Boolean);
  return allowed.includes(String(user.login ?? '').toLowerCase()) ? String(user.login) : null;
}

async function readSettings(env) {
  const row = await env.COMPARISONS_DB.prepare('SELECT * FROM monetization_settings WHERE id = 1').first();
  return normalize(row);
}

export async function handleMonetizationRequest(request, env, fetchImpl = fetch) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/api/monetization')) return null;
  const headers = corsHeaders(request, env);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, headers);
  if (!env.COMPARISONS_DB) return json({ error: 'Monetization storage is not configured' }, 503, headers);

  if (url.pathname === '/api/monetization/config' && request.method === 'GET') {
    const settings = await readSettings(env);
    const ready = settings.enabled && settings.consentReady && validClient(settings.clientId)
      && Object.values(settings.slots).every(validSlot);
    return json(ready ? { enabled: true, clientId: settings.clientId, slots: settings.slots } : { enabled: false }, 200, headers, 'public, max-age=300, stale-while-revalidate=600');
  }

  const login = await authorizeAdmin(request, env, fetchImpl);
  if (!login) return json({ error: 'Unauthorized' }, 401, headers);

  if (url.pathname === '/api/monetization/settings' && request.method === 'GET') {
    return json(await readSettings(env), 200, headers);
  }

  if (url.pathname === '/api/monetization/settings' && request.method === 'PUT') {
    if (Number(request.headers.get('Content-Length') ?? 0) > 8192) return json({ error: 'Payload too large' }, 413, headers);
    let payload;
    try { payload = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400, headers); }
    const clientId = String(payload.clientId ?? '').trim();
    const catalogue = String(payload.slots?.catalogue ?? '').trim();
    const guide = String(payload.slots?.guide ?? '').trim();
    const offer = String(payload.slots?.offer ?? '').trim();
    const enabled = Boolean(payload.enabled);
    const consentReady = Boolean(payload.consentReady);
    const errors = [];
    if (clientId && !validClient(clientId)) errors.push('Identifiant éditeur invalide (format ca-pub-…).');
    for (const [label, value] of [['catalogue', catalogue], ['guide', guide], ['offre', offer]]) if (value && !validSlot(value)) errors.push(`Slot ${label} invalide.`);
    if (enabled && (!validClient(clientId) || ![catalogue, guide, offer].every(validSlot) || !consentReady)) errors.push('Complétez les trois slots et validez le consentement avant activation.');
    if (errors.length) return json({ error: 'Invalid settings', errors }, 400, headers);
    const now = Math.floor(Date.now() / 1000);
    await env.COMPARISONS_DB.prepare(`INSERT INTO monetization_settings (id, enabled, client_id, catalogue_slot, guide_slot, offer_slot, consent_ready, updated_at, updated_by)
      VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET enabled=excluded.enabled, client_id=excluded.client_id, catalogue_slot=excluded.catalogue_slot, guide_slot=excluded.guide_slot, offer_slot=excluded.offer_slot, consent_ready=excluded.consent_ready, updated_at=excluded.updated_at, updated_by=excluded.updated_by`)
      .bind(enabled ? 1 : 0, clientId, catalogue, guide, offer, consentReady ? 1 : 0, now, login).run();
    return json(await readSettings(env), 200, headers);
  }

  return json({ error: 'Not found' }, 404, headers);
}
