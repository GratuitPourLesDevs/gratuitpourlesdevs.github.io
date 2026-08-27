-- Operational history for saved-search monitoring runs.

CREATE TABLE IF NOT EXISTS search_watch_runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at INTEGER NOT NULL,
  finished_at INTEGER NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('success', 'error')),
  run_trigger TEXT NOT NULL CHECK (run_trigger IN ('cron', 'manual')),
  frequency_scope TEXT NOT NULL CHECK (frequency_scope IN ('weekly', 'immediate', 'all')),
  watched_seen INTEGER NOT NULL DEFAULT 0,
  searches_evaluated INTEGER NOT NULL DEFAULT 0,
  baselines_initialized INTEGER NOT NULL DEFAULT 0,
  events_created INTEGER NOT NULL DEFAULT 0,
  error_message TEXT
);

CREATE INDEX IF NOT EXISTS search_watch_runs_finished_idx
  ON search_watch_runs(finished_at DESC);

CREATE INDEX IF NOT EXISTS search_watch_runs_status_idx
  ON search_watch_runs(status, finished_at DESC);

CREATE TRIGGER IF NOT EXISTS search_watch_runs_no_update
BEFORE UPDATE ON search_watch_runs
BEGIN
  SELECT RAISE(ABORT, 'search_watch_runs is append-only');
END;

CREATE TRIGGER IF NOT EXISTS search_watch_runs_no_delete
BEFORE DELETE ON search_watch_runs
BEGIN
  SELECT RAISE(ABORT, 'search_watch_runs is append-only');
END;
