-- Saved-search monitoring: structured filters, watch state and user-facing watch events.

ALTER TABLE saved_searches ADD COLUMN filters_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE saved_searches ADD COLUMN watch_enabled INTEGER NOT NULL DEFAULT 0 CHECK (watch_enabled IN (0, 1));
ALTER TABLE saved_searches ADD COLUMN watch_frequency TEXT NOT NULL DEFAULT 'weekly' CHECK (watch_frequency IN ('weekly', 'immediate'));
ALTER TABLE saved_searches ADD COLUMN watch_started_at INTEGER;
ALTER TABLE saved_searches ADD COLUMN last_evaluated_at INTEGER;
ALTER TABLE saved_searches ADD COLUMN last_match_offer_ids TEXT;

CREATE INDEX IF NOT EXISTS saved_searches_watch_idx
  ON saved_searches(watch_enabled, watch_frequency, user_id);

CREATE TABLE IF NOT EXISTS search_watch_events (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  saved_search_id INTEGER NOT NULL,
  offer_id TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('MATCH_ADDED', 'MATCH_REMOVED', 'MATCH_CRITICAL_CHANGED')),
  detected_at INTEGER NOT NULL,
  radar_event_id TEXT,
  radar_event_type TEXT,
  severity TEXT CHECK (severity IS NULL OR severity IN ('info', 'important', 'critical')),
  field TEXT,
  old_value TEXT,
  new_value TEXT,
  fingerprint TEXT NOT NULL UNIQUE,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS search_watch_events_user_detected_idx
  ON search_watch_events(user_id, detected_at DESC);
CREATE INDEX IF NOT EXISTS search_watch_events_search_detected_idx
  ON search_watch_events(saved_search_id, detected_at DESC);
CREATE INDEX IF NOT EXISTS search_watch_events_offer_detected_idx
  ON search_watch_events(offer_id, detected_at DESC);
