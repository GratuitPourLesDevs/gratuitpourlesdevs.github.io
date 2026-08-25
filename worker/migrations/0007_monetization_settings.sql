CREATE TABLE IF NOT EXISTS monetization_settings (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  enabled INTEGER NOT NULL DEFAULT 0 CHECK (enabled IN (0, 1)),
  client_id TEXT NOT NULL DEFAULT '',
  catalogue_slot TEXT NOT NULL DEFAULT '',
  guide_slot TEXT NOT NULL DEFAULT '',
  offer_slot TEXT NOT NULL DEFAULT '',
  consent_ready INTEGER NOT NULL DEFAULT 0 CHECK (consent_ready IN (0, 1)),
  updated_at INTEGER NOT NULL,
  updated_by TEXT NOT NULL DEFAULT ''
);

INSERT OR IGNORE INTO monetization_settings (id, updated_at) VALUES (1, 0);
