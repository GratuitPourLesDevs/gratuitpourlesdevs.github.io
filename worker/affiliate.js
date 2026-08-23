const encoder = new TextEncoder();
const EVENT_RETENTION_SECONDS = 90 * 86400;
const ALLOWED_PLACEMENTS = new Set(['accueil', 'catalogue', 'fiche', 'guide', 'comparatif', 'fournisseur']);

function securityHeaders() { return { 'Cache-Control': 'no-store, max-age=0', 'Referrer-Policy': 'no-referrer', 'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'DENY' }; }
function allowedOrigin(request, env) { const origin = request.headers.get('Origin'); if (!origin) return null; if (origin === env.ALLOWED_ORIGIN || /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin)) return origin; return false; }
function corsHeaders(request, env) { const origin = allowedOrigin(request, env); return origin ? { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Max-Age': '86400', Vary: 'Origin' } : {}; }
function json(data, status = 200, headers = {}) { return new Response(JSON.stringify(data), { status, headers: { ...securityHeaders(), 'Content-Type': 'application/json; charset=utf-8', ...headers } }); }
function slug(value) { const result = String(value ?? '').trim(); return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(result) ? result : null; }
function pagePath(value) { const result = String(value ?? '').trim(); return result.startsWith('/') && result.length <= 256 ? result : '/'; }
async function sha256Hex(value) { const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value))); return [...digest].map((byte) => byte.toString(16).padStart(2, '0')).join(''); }
async function eventFingerprint(request, env, dimensions) { const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown'; const agent = request.headers.get('User-Agent') ?? 'unknown'; return sha256Hex(`${env.ANALYTICS_SECRET}:${dimensions}:${ip}:${agent}`); }

async function authorizeAdmin(request, env, fetchImpl) {
  const match = (request.headers.get('Authorization') ?? '').match(/^Bearer\s+(.+)$/i); if (!match) return false;
  const response = await fetchImpl('https://api.github.com/user', { headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${match[1]}`, 'User-Agent': 'GratuitPourLesDevs-Affiliate-Admin', 'X-GitHub-Api-Version': '2022-11-28' } });
  if (!response.ok) return false; const user = await response.json();
  const allowed = String(env.ALLOWED_GITHUB_LOGINS ?? '').split(',').map((login) => login.trim().toLowerCase()).filter(Boolean);
  return allowed.includes(String(user.login ?? '').toLowerCase());
}

async function recordEvent(request, env) {
  const headers = corsHeaders(request, env); if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, headers);
  if (!env.COMPARISONS_DB || !env.ANALYTICS_SECRET) return json({ error: 'Affiliate tracking is not configured' }, 503, headers);
  if (Number(request.headers.get('Content-Length') ?? 0) > 4096) return json({ error: 'Payload too large' }, 413, headers);
  let payload; try { payload = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400, headers); }
  const eventType = payload.eventType === 'impression' || payload.eventType === 'click' ? payload.eventType : null;
  const campaign = slug(payload.campaign), program = slug(payload.program), offer = slug(payload.offer), placement = ALLOWED_PLACEMENTS.has(payload.placement) ? payload.placement : null;
  if (!eventType || !campaign || !program || !offer || !placement) return json({ error: 'Invalid affiliate event' }, 400, headers);
  const now = Math.floor(Date.now() / 1000), eventWindow = String(Math.floor(now / (eventType === 'impression' ? 86400 : 21600)));
  const fingerprint = await eventFingerprint(request, env, `${eventType}:${eventWindow}:${campaign}:${program}:${offer}:${placement}`);
  const result = await env.COMPARISONS_DB.prepare('INSERT OR IGNORE INTO affiliate_events (program_slug, campaign_slug, offer_slug, placement, event_type, page_path, event_window, fingerprint, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(program, campaign, offer, placement, eventType, pagePath(payload.pagePath), eventWindow, fingerprint, now).run();
  await env.COMPARISONS_DB.prepare('DELETE FROM affiliate_events WHERE created_at < ?').bind(now - EVENT_RETENTION_SECONDS).run();
  return json({ recorded: Number(result.meta?.changes ?? 0) > 0 }, 200, headers);
}

function mergeBreakdowns(eventRows, conversionRows, key) {
  const map = new Map();
  for (const row of eventRows) { const id = row[key]; const item = map.get(id) ?? { id, impressions: 0, clicks: 0, conversions: 0, revenueByCurrency: {} }; item.impressions = Number(row.impressions ?? 0); item.clicks = Number(row.clicks ?? 0); map.set(id, item); }
  for (const row of conversionRows) { const id = row[key]; const item = map.get(id) ?? { id, impressions: 0, clicks: 0, conversions: 0, revenueByCurrency: {} }; item.conversions += Number(row.conversions ?? 0); if (row.currency) item.revenueByCurrency[row.currency] = Number(row.revenue_minor ?? 0); map.set(id, item); }
  return [...map.values()].map((item) => ({ ...item, ctr: item.impressions ? item.clicks / item.impressions : 0 })).sort((a, b) => b.clicks - a.clicks || b.conversions - a.conversions || a.id.localeCompare(b.id));
}

async function stats(request, env, fetchImpl) {
  const headers = corsHeaders(request, env); if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' }, 403, headers); if (!env.COMPARISONS_DB) return json({ error: 'Affiliate tracking is not configured' }, 503, headers); if (!await authorizeAdmin(request, env, fetchImpl)) return json({ error: 'Unauthorized' }, 401, headers);
  const url = new URL(request.url), days = Math.min(365, Math.max(1, Number.parseInt(url.searchParams.get('days') ?? '30', 10) || 30)), since = Math.floor(Date.now() / 1000) - days * 86400;
  const [totals,revenue,programEvents,programConversions,campaignEvents,campaignConversions,placementEvents,recent] = await Promise.all([
    env.COMPARISONS_DB.prepare("SELECT SUM(CASE WHEN event_type='impression' THEN 1 ELSE 0 END) AS impressions, SUM(CASE WHEN event_type='click' THEN 1 ELSE 0 END) AS clicks FROM affiliate_events WHERE created_at >= ?").bind(since).first(),
    env.COMPARISONS_DB.prepare('SELECT currency, COUNT(*) AS conversions, SUM(amount_minor) AS revenue_minor FROM affiliate_conversions WHERE occurred_at >= ? GROUP BY currency ORDER BY currency').bind(since).all(),
    env.COMPARISONS_DB.prepare("SELECT program_slug, SUM(CASE WHEN event_type='impression' THEN 1 ELSE 0 END) AS impressions, SUM(CASE WHEN event_type='click' THEN 1 ELSE 0 END) AS clicks FROM affiliate_events WHERE created_at >= ? GROUP BY program_slug").bind(since).all(),
    env.COMPARISONS_DB.prepare('SELECT program_slug, currency, COUNT(*) AS conversions, SUM(amount_minor) AS revenue_minor FROM affiliate_conversions WHERE occurred_at >= ? GROUP BY program_slug, currency').bind(since).all(),
    env.COMPARISONS_DB.prepare("SELECT campaign_slug, SUM(CASE WHEN event_type='impression' THEN 1 ELSE 0 END) AS impressions, SUM(CASE WHEN event_type='click' THEN 1 ELSE 0 END) AS clicks FROM affiliate_events WHERE created_at >= ? GROUP BY campaign_slug").bind(since).all(),
    env.COMPARISONS_DB.prepare('SELECT campaign_slug, currency, COUNT(*) AS conversions, SUM(amount_minor) AS revenue_minor FROM affiliate_conversions WHERE occurred_at >= ? GROUP BY campaign_slug, currency').bind(since).all(),
    env.COMPARISONS_DB.prepare("SELECT placement, SUM(CASE WHEN event_type='impression' THEN 1 ELSE 0 END) AS impressions, SUM(CASE WHEN event_type='click' THEN 1 ELSE 0 END) AS clicks FROM affiliate_events WHERE created_at >= ? GROUP BY placement ORDER BY clicks DESC, impressions DESC").bind(since).all(),
    env.COMPARISONS_DB.prepare('SELECT program_slug, campaign_slug, offer_slug, external_ref, amount_minor, currency, occurred_at, note FROM affiliate_conversions ORDER BY occurred_at DESC, id DESC LIMIT 25').all(),
  ]);
  const impressions = Number(totals?.impressions ?? 0), clicks = Number(totals?.clicks ?? 0), revenueByCurrency = Object.fromEntries(revenue.results.map((row) => [row.currency, Number(row.revenue_minor ?? 0)])), conversions = revenue.results.reduce((sum,row)=>sum+Number(row.conversions ?? 0),0);
  return json({ days, totals:{ impressions, clicks, ctr:impressions?clicks/impressions:0, conversions, revenueByCurrency }, programs:mergeBreakdowns(programEvents.results,programConversions.results,'program_slug'), campaigns:mergeBreakdowns(campaignEvents.results,campaignConversions.results,'campaign_slug'), placements:placementEvents.results.map((row)=>({ placement:row.placement, impressions:Number(row.impressions??0), clicks:Number(row.clicks??0), ctr:Number(row.impressions??0)?Number(row.clicks??0)/Number(row.impressions):0 })), recentConversions:recent.results.map((row)=>({ program:row.program_slug,campaign:row.campaign_slug,offer:row.offer_slug,externalRef:row.external_ref,amountMinor:Number(row.amount_minor),currency:row.currency,occurredAt:Number(row.occurred_at)*1000,note:row.note??'' })) }, 200, headers);
}

async function addConversion(request, env, fetchImpl) {
  const headers = corsHeaders(request, env); if (allowedOrigin(request, env) === false) return json({ error: 'Origin not allowed' },403,headers); if (!env.COMPARISONS_DB) return json({ error:'Affiliate tracking is not configured' },503,headers); if (!await authorizeAdmin(request,env,fetchImpl)) return json({ error:'Unauthorized' },401,headers);
  if (Number(request.headers.get('Content-Length') ?? 0)>8192) return json({ error:'Payload too large' },413,headers); let payload; try{payload=await request.json();}catch{return json({error:'Invalid JSON'},400,headers);}
  const program=slug(payload.program),campaign=payload.campaign?slug(payload.campaign):null,offer=payload.offer?slug(payload.offer):null,externalRef=String(payload.externalRef??'').trim(),amountMinor=Number(payload.amountMinor),currency=String(payload.currency??'EUR').trim().toUpperCase(),note=String(payload.note??'').trim().slice(0,500),occurredAt=payload.occurredAt?Math.floor(new Date(payload.occurredAt).getTime()/1000):Math.floor(Date.now()/1000);
  if(!program||!externalRef||externalRef.length>120||!Number.isInteger(amountMinor)||amountMinor<0||!/^[A-Z]{3}$/.test(currency)||!Number.isFinite(occurredAt)) return json({error:'Invalid conversion'},400,headers);
  const result=await env.COMPARISONS_DB.prepare('INSERT OR IGNORE INTO affiliate_conversions (program_slug,campaign_slug,offer_slug,external_ref,amount_minor,currency,occurred_at,created_at,note) VALUES (?,?,?,?,?,?,?,?,?)').bind(program,campaign,offer,externalRef,amountMinor,currency,occurredAt,Math.floor(Date.now()/1000),note||null).run();
  if(Number(result.meta?.changes??0)===0) return json({error:'Conversion reference already exists'},409,headers); return json({created:true},201,headers);
}

export async function handleAffiliateRequest(request, env, fetchImpl = fetch) {
  const url = new URL(request.url); if (!url.pathname.startsWith('/api/affiliate')) return null; const headers = corsHeaders(request, env);
  if (request.method === 'OPTIONS') return new Response(null,{status:204,headers});
  if (url.pathname === '/api/affiliate/event' && request.method === 'POST') return recordEvent(request,env);
  if (url.pathname === '/api/affiliate/stats' && request.method === 'GET') return stats(request,env,fetchImpl);
  if (url.pathname === '/api/affiliate/conversions' && request.method === 'POST') return addConversion(request,env,fetchImpl);
  return json({error:'Not found'},404,headers);
}
