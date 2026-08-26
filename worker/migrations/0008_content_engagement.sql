CREATE TABLE IF NOT EXISTS content_engagement (
  content_type TEXT NOT NULL,
  content_key TEXT NOT NULL,
  view_count INTEGER NOT NULL DEFAULT 0,
  helpful_count INTEGER NOT NULL DEFAULT 0,
  last_viewed_at INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (content_type, content_key)
);

CREATE TABLE IF NOT EXISTS content_engagement_events (
  content_type TEXT NOT NULL,
  content_key TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_window TEXT NOT NULL,
  fingerprint TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (content_type, content_key, event_type, event_window, fingerprint)
);

CREATE INDEX IF NOT EXISTS content_engagement_events_created_at
  ON content_engagement_events (created_at);
