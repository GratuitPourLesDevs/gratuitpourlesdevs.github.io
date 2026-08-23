CREATE TABLE IF NOT EXISTS affiliate_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  program_slug TEXT NOT NULL,
  campaign_slug TEXT NOT NULL,
  offer_slug TEXT NOT NULL,
  placement TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('impression', 'click')),
  page_path TEXT NOT NULL,
  event_window TEXT NOT NULL,
  fingerprint TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE UNIQUE INDEX IF NOT EXISTS affiliate_events_unique ON affiliate_events (campaign_slug, offer_slug, placement, event_type, event_window, fingerprint);
CREATE INDEX IF NOT EXISTS affiliate_events_created_at ON affiliate_events (created_at);
CREATE INDEX IF NOT EXISTS affiliate_events_program_campaign ON affiliate_events (program_slug, campaign_slug, created_at);
CREATE TABLE IF NOT EXISTS affiliate_conversions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  program_slug TEXT NOT NULL,
  campaign_slug TEXT,
  offer_slug TEXT,
  external_ref TEXT NOT NULL UNIQUE,
  amount_minor INTEGER NOT NULL CHECK (amount_minor >= 0),
  currency TEXT NOT NULL DEFAULT 'EUR',
  occurred_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  note TEXT
);
CREATE INDEX IF NOT EXISTS affiliate_conversions_occurred_at ON affiliate_conversions (occurred_at);
CREATE INDEX IF NOT EXISTS affiliate_conversions_program_campaign ON affiliate_conversions (program_slug, campaign_slug, occurred_at);
