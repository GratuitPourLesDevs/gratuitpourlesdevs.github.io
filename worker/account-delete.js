const encoder = new TextEncoder();

async function sha256Hex(value) {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
  return [...digest].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function allowedOrigin(request, env) {
  const origin = request.headers.get('Origin');
  if (!origin) return null;
  if (origin === env.ALLOWED_ORIGIN || /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin)) return origin;
  return false;
}

function headers(request, env) {
  const origin = allowedOrigin(request, env);
  return {
    'Cache-Control': 'no-store, max-age=0',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
    ...(origin ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' } : {}),
  };
}

function response(data, status, request, env) {
  return new Response(JSON.stringify(data), { status, headers: headers(request, env) });
}

export async function handleAccountDeleteRequest(request, env) {
  const url = new URL(request.url);
  if (url.pathname !== '/api/account/delete') return null;
  if (allowedOrigin(request, env) === false) return response({ error: 'Origin not allowed' }, 403, request, env);
  if (request.method !== 'DELETE') return response({ error: 'Method not allowed' }, 405, request, env);
  if (!env.COMPARISONS_DB) return response({ error: 'Account database is not configured' }, 503, request, env);

  const match = (request.headers.get('Authorization') ?? '').match(/^Bearer\s+(.+)$/i);
  const token = match?.[1]?.trim();
  if (!token) return response({ error: 'Authentication required', code: 'unauthorized' }, 401, request, env);
  const tokenHash = await sha256Hex(token);
  const now = Math.floor(Date.now() / 1000);
  const session = await env.COMPARISONS_DB.prepare('SELECT user_id FROM account_sessions WHERE token_hash = ? AND expires_at > ?').bind(tokenHash, now).first();
  if (!session?.user_id) return response({ error: 'Authentication required', code: 'unauthorized' }, 401, request, env);

  const userId = session.user_id;
  const tables = ['pro_interest', 'user_stacks', 'saved_comparisons', 'saved_searches', 'user_follows', 'user_favorites', 'account_sessions'];
  for (const table of tables) await env.COMPARISONS_DB.prepare(`DELETE FROM ${table} WHERE user_id = ?`).bind(userId).run();
  await env.COMPARISONS_DB.prepare('DELETE FROM users WHERE id = ?').bind(userId).run();
  return response({ deleted: true }, 200, request, env);
}
