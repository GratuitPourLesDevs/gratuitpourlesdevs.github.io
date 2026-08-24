import assert from 'node:assert/strict';
import test from 'node:test';
import { frontmatterValue, setFrontmatterValue } from './verify-offers.mjs';

test('remplace toute une valeur YAML répartie sur plusieurs lignes', () => {
  const input = `---
nom: Ably
verificationNote: Le pricing officiel confirme 6 M de messages/mois
  et 500 messages/s.
statut: active
---

Contenu.
`;

  const output = setFrontmatterValue(input, 'verificationNote', 'Source tarifaire accessible.');

  assert.equal(frontmatterValue(input, 'verificationNote'), 'Le pricing officiel confirme 6 M de messages/mois et 500 messages/s.');
  assert.match(output, /verificationNote: "Source tarifaire accessible\."\nstatut: active/);
  assert.doesNotMatch(output, /et 500 messages\/s/);
});

test('ne modifie jamais une clé homonyme située dans le corps Markdown', () => {
  const input = `---
nom: Exemple
statut: active
---

statut: à conserver dans le contenu
`;

  const output = setFrontmatterValue(input, 'statut', 'a_verifier');

  assert.match(output, /statut: "a_verifier"\n---/);
  assert.match(output, /statut: à conserver dans le contenu/);
});

test('ajoute proprement une nouvelle valeur avant la fermeture du front matter', () => {
  const input = `---
nom: Exemple
---
`;

  const output = setFrontmatterValue(input, 'verificationAutomatiqueLe', '2026-08-24');

  assert.match(output, /nom: Exemple\nverificationAutomatiqueLe: 2026-08-24\n---/);
});
