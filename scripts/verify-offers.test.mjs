import assert from 'node:assert/strict';
import test from 'node:test';
import { decide, frontmatterValue, setFrontmatterValue } from './verify-offers.mjs';

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

test('conserve le statut actif lorsque le contrôle réseau est inconclusif', () => {
  const result = decide(
    { kind: 'reachable', detail: 'HTTP 200' },
    { kind: 'blocked', detail: 'HTTP 403' },
    { statut: 'active' },
  );

  assert.equal(result.statut, 'active');
  assert.equal(result.verificationEtat, 'inconclusive');
  assert.equal(result.verificationCode, 'controle_bloque');
  assert.equal(result.verificationEchecsConsecutifs, 1);
  assert.equal(result.updateVerifiedAt, false);
});

test('ne rétrograde pas une offre si la détection textuelle ne trouve pas de mention gratuite', () => {
  const result = decide(
    { kind: 'reachable', detail: 'HTTP 200' },
    { kind: 'reachable', detail: 'HTTP 200', hasFreeEvidence: false },
    { statut: 'active', verificationCode: 'gratuit_non_detecte', verificationEchecsConsecutifs: '3' },
  );

  assert.equal(result.statut, 'active');
  assert.equal(result.verificationEtat, 'controle_requis');
  assert.equal(result.verificationEchecsConsecutifs, 4);
});

test('exige deux disparitions consécutives avant d’archiver une offre', () => {
  const first = decide(
    { kind: 'gone', detail: 'HTTP 404' },
    { kind: 'blocked', detail: 'HTTP 404' },
    { statut: 'active' },
  );
  const second = decide(
    { kind: 'gone', detail: 'HTTP 404' },
    { kind: 'blocked', detail: 'HTTP 404' },
    { statut: first.statut, verificationCode: first.verificationCode, verificationEchecsConsecutifs: first.verificationEchecsConsecutifs },
  );

  assert.equal(first.statut, 'active');
  assert.equal(second.statut, 'obsolete');
});

test('exige deux disparitions consécutives de la source avant de demander une vérification', () => {
  const first = decide(
    { kind: 'reachable', detail: 'HTTP 200' },
    { kind: 'gone', detail: 'HTTP 404' },
    { statut: 'active' },
  );
  const second = decide(
    { kind: 'reachable', detail: 'HTTP 200' },
    { kind: 'gone', detail: 'HTTP 404' },
    { statut: first.statut, verificationCode: first.verificationCode, verificationEchecsConsecutifs: first.verificationEchecsConsecutifs },
  );

  assert.equal(first.statut, 'active');
  assert.equal(second.statut, 'a_verifier');
});

test('réactive immédiatement une offre lorsque la gratuité est confirmée', () => {
  const result = decide(
    { kind: 'reachable', detail: 'HTTP 200' },
    { kind: 'reachable', detail: 'HTTP 200', hasFreeEvidence: true },
    { statut: 'a_verifier', verificationCode: 'controle_bloque', verificationEchecsConsecutifs: '2' },
  );

  assert.equal(result.statut, 'active');
  assert.equal(result.verificationEtat, 'confirmee');
  assert.equal(result.verificationEchecsConsecutifs, 0);
  assert.equal(result.updateVerifiedAt, true);
});
