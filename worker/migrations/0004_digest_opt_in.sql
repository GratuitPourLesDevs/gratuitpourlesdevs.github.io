UPDATE users SET digest_enabled = 0;

CREATE TRIGGER IF NOT EXISTS users_digest_opt_in_default
AFTER INSERT ON users
WHEN NEW.digest_enabled <> 0
BEGIN
  UPDATE users SET digest_enabled = 0 WHERE id = NEW.id;
END;
