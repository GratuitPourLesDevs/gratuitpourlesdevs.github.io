CREATE TABLE IF NOT EXISTS comparisons (
  comparison_key TEXT PRIMARY KEY,
  offer_ids TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  last_viewed_at INTEGER NOT NULL,
  view_count INTEGER NOT NULL DEFAULT 0,
  helpful_count INTEGER NOT NULL DEFAULT 0,
  featured INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS comparisons_popular
  ON comparisons(view_count DESC, helpful_count DESC, last_viewed_at DESC);

CREATE INDEX IF NOT EXISTS comparisons_recent
  ON comparisons(created_at DESC);

CREATE TABLE IF NOT EXISTS comparison_events (
  comparison_key TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_window TEXT NOT NULL,
  fingerprint TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (comparison_key, event_type, event_window, fingerprint)
);

CREATE INDEX IF NOT EXISTS comparison_events_created
  ON comparison_events(created_at);

INSERT OR IGNORE INTO comparisons
  (comparison_key, offer_ids, created_at, last_viewed_at, view_count, helpful_count, featured)
VALUES
  ('grafana-cloud,uptimerobot', 'grafana-cloud,uptimerobot', 1786665600, 1786665600, 0, 0, 1),
  ('cloudflare-pages,vercel', 'cloudflare-pages,vercel', 1786665600, 1786665600, 0, 0, 1),
  ('amazon-dynamodb,neon', 'amazon-dynamodb,neon', 1786665600, 1786665600, 0, 0, 1),
  ('aws-lambda,cloudflare-workers', 'aws-lambda,cloudflare-workers', 1786665600, 1786665600, 0, 0, 1),
  ('cloudflare-r2,azure-storage-free-services', 'cloudflare-r2,azure-storage-free-services', 1786665600, 1786665600, 0, 0, 1),
  ('github-actions,azure-pipelines-open-source', 'github-actions,azure-pipelines-open-source', 1786665600, 1786665600, 0, 0, 1);
