import assert from 'node:assert/strict';
import test from 'node:test';
import { hasNoIndexDirective, isAdvertisingEligiblePath } from './advertising-eligibility.mjs';

test('détecte noindex parmi plusieurs directives', () => {
  assert.equal(hasNoIndexDirective('noindex, follow'), true);
  assert.equal(hasNoIndexDirective('INDEX, follow'), false);
});

test('exclut les pages principalement navigationnelles', () => {
  for (const pathname of ['/', '/explorer/', '/guides/', '/stacks/', '/comparaisons/', '/compte/', '/archives/']) {
    assert.equal(isAdvertisingEligiblePath(pathname), false, pathname);
  }
});

test('exclut toute page noindex et toute page d’administration', () => {
  assert.equal(isAdvertisingEligiblePath('/offres/exemple/', 'noindex, follow'), false);
  assert.equal(isAdvertisingEligiblePath('/admin/users/'), false);
  assert.equal(isAdvertisingEligiblePath('/compte/preferences/'), false);
  assert.equal(isAdvertisingEligiblePath('/recherche/cloud/'), false);
});

test('conserve les pages éditoriales indexables', () => {
  assert.equal(isAdvertisingEligiblePath('/offres/alphai/'), true);
  assert.equal(isAdvertisingEligiblePath('/guides/api-donnees-ml/meilleures-offres-gratuites/'), true);
  assert.equal(isAdvertisingEligiblePath('/stacks/portfolio/'), true);
});
