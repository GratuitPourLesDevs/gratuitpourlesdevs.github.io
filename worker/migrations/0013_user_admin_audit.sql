-- Journal append-only des actions administratives sur les comptes utilisateurs.

CREATE TABLE IF NOT EXISTS admin_user_actions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  admin_login TEXT NOT NULL,
  target_user_id TEXT NOT NULL,
  target_account_label TEXT,
  action_type TEXT NOT NULL CHECK (action_type IN ('PLAN_CHANGED', 'SESSIONS_REVOKED')),
  old_value TEXT,
  new_value TEXT,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS admin_user_actions_created_idx
  ON admin_user_actions(created_at DESC, id DESC);

CREATE INDEX IF NOT EXISTS admin_user_actions_target_idx
  ON admin_user_actions(target_user_id, created_at DESC);

CREATE TRIGGER IF NOT EXISTS admin_user_actions_no_update
BEFORE UPDATE ON admin_user_actions
BEGIN
  SELECT RAISE(ABORT, 'admin_user_actions is append-only');
END;

CREATE TRIGGER IF NOT EXISTS admin_user_actions_no_delete
BEFORE DELETE ON admin_user_actions
BEGIN
  SELECT RAISE(ABORT, 'admin_user_actions is append-only');
END;
