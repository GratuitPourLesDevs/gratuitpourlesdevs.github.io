-- Les nouveaux comptes ne doivent jamais être abonnés au digest sans action explicite.
-- Cette migration corrige aussi tout compte éventuellement créé entre les déploiements.

UPDATE users
SET digest_enabled = 0,
    updated_at = unixepoch()
WHERE digest_enabled <> 0;

CREATE TRIGGER IF NOT EXISTS users_digest_opt_in_after_insert
AFTER INSERT ON users
WHEN NEW.digest_enabled <> 0
BEGIN
  UPDATE users
  SET digest_enabled = 0,
      updated_at = unixepoch()
  WHERE id = NEW.id;
END;
