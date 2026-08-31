PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS account_identities (
  provider TEXT NOT NULL CHECK (provider IN ('github', 'google', 'email')),
  provider_user_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  email TEXT,
  email_verified INTEGER NOT NULL DEFAULT 0,
  display_name TEXT,
  avatar_url TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  last_login_at INTEGER NOT NULL,
  PRIMARY KEY (provider, provider_user_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS account_identities_user_idx ON account_identities(user_id);
CREATE INDEX IF NOT EXISTS account_identities_email_idx ON account_identities(email, email_verified);

INSERT OR IGNORE INTO account_identities (
  provider, provider_user_id, user_id, email, email_verified,
  display_name, avatar_url, created_at, updated_at, last_login_at
)
SELECT
  'github', CAST(github_id AS TEXT), id, LOWER(email), email_verified,
  display_name, avatar_url, created_at, updated_at, last_login_at
FROM users;

CREATE TABLE IF NOT EXISTS account_magic_links (
  token_hash TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  return_to TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  consumed_at INTEGER
);
CREATE INDEX IF NOT EXISTS account_magic_links_email_idx ON account_magic_links(email, created_at DESC);
CREATE INDEX IF NOT EXISTS account_magic_links_expiry_idx ON account_magic_links(expires_at);
