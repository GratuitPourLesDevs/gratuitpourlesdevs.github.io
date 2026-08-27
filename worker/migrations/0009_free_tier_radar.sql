-- Free Tier Radar: immutable business change log + current comparison baseline.

CREATE TABLE IF NOT EXISTS offer_radar_state (
  offer_id TEXT PRIMARY KEY,
  snapshot_hash TEXT NOT NULL,
  snapshot_json TEXT NOT NULL,
  first_observed_at INTEGER NOT NULL,
  last_observed_at INTEGER NOT NULL,
  last_changed_at INTEGER,
  source_url TEXT,
  verified_at INTEGER
);

CREATE INDEX IF NOT EXISTS idx_offer_radar_state_changed
  ON offer_radar_state(last_changed_at DESC);

CREATE TABLE IF NOT EXISTS offer_change_events (
  event_id TEXT PRIMARY KEY,
  offer_id TEXT NOT NULL,
  occurred_at INTEGER NOT NULL,
  detected_at INTEGER NOT NULL,
  field TEXT NOT NULL,
  old_value TEXT,
  new_value TEXT,
  event_type TEXT NOT NULL,
  severity TEXT NOT NULL CHECK (severity IN ('info', 'important', 'critical')),
  source_url TEXT,
  verified INTEGER NOT NULL DEFAULT 0 CHECK (verified IN (0, 1)),
  fingerprint TEXT NOT NULL UNIQUE,
  metadata_json TEXT
);

CREATE INDEX IF NOT EXISTS idx_offer_change_events_offer_detected
  ON offer_change_events(offer_id, detected_at DESC);
CREATE INDEX IF NOT EXISTS idx_offer_change_events_detected
  ON offer_change_events(detected_at DESC);
CREATE INDEX IF NOT EXISTS idx_offer_change_events_severity_detected
  ON offer_change_events(severity, detected_at DESC);
CREATE INDEX IF NOT EXISTS idx_offer_change_events_type_detected
  ON offer_change_events(event_type, detected_at DESC);
CREATE INDEX IF NOT EXISTS idx_offer_change_events_verified_detected
  ON offer_change_events(verified, detected_at DESC);

-- Le journal est append-only au niveau SQL, pas seulement par convention applicative.
CREATE TRIGGER IF NOT EXISTS offer_change_events_prevent_update
BEFORE UPDATE ON offer_change_events
BEGIN
  SELECT RAISE(ABORT, 'offer_change_events is append-only');
END;

CREATE TRIGGER IF NOT EXISTS offer_change_events_prevent_delete
BEFORE DELETE ON offer_change_events
BEGIN
  SELECT RAISE(ABORT, 'offer_change_events is append-only');
END;

CREATE TABLE IF NOT EXISTS offer_radar_runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at INTEGER NOT NULL,
  finished_at INTEGER NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('success', 'error')),
  offers_seen INTEGER NOT NULL DEFAULT 0,
  baselines_created INTEGER NOT NULL DEFAULT 0,
  offers_changed INTEGER NOT NULL DEFAULT 0,
  events_created INTEGER NOT NULL DEFAULT 0,
  error_message TEXT
);

CREATE INDEX IF NOT EXISTS idx_offer_radar_runs_started
  ON offer_radar_runs(started_at DESC);
