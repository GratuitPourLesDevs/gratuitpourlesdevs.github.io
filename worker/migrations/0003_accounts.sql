PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  github_id INTEGER NOT NULL UNIQUE,
  github_login TEXT NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  email TEXT,
  email_verified INTEGER NOT NULL DEFAULT 0,
  plan TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'pro')),
  digest_enabled INTEGER NOT NULL DEFAULT 1,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  last_login_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS account_sessions (
  token_hash TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS account_sessions_user_idx ON account_sessions(user_id);
CREATE INDEX IF NOT EXISTS account_sessions_expiry_idx ON account_sessions(expires_at);

CREATE TABLE IF NOT EXISTS user_favorites (
  user_id TEXT NOT NULL,
  offer_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, offer_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS user_favorites_user_idx ON user_favorites(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS user_follows (
  user_id TEXT NOT NULL,
  offer_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, offer_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS user_follows_user_idx ON user_follows(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS saved_searches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS saved_searches_user_idx ON saved_searches(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS saved_comparisons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  offer_ids TEXT NOT NULL,
  url TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS saved_comparisons_user_idx ON saved_comparisons(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS user_stacks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  offer_ids TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS user_stacks_user_idx ON user_stacks(user_id, updated_at DESC);

CREATE TABLE IF NOT EXISTS pro_interest (
  user_id TEXT PRIMARY KEY,
  clicks INTEGER NOT NULL DEFAULT 1,
  first_clicked_at INTEGER NOT NULL,
  last_clicked_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
