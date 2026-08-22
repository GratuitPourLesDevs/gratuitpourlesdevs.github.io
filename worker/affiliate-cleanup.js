const EVENT_RETENTION_SECONDS = 90 * 86400;

export async function cleanupAffiliateEvents(env) {
  if (!env.COMPARISONS_DB) return { deleted: 0, skipped: true };
  const cutoff = Math.floor(Date.now() / 1000) - EVENT_RETENTION_SECONDS;
  const result = await env.COMPARISONS_DB
    .prepare('DELETE FROM affiliate_events WHERE created_at < ?')
    .bind(cutoff)
    .run();
  return { deleted: Number(result.meta?.changes ?? 0), skipped: false };
}
