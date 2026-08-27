import assert from 'node:assert/strict';
import test from 'node:test';
import {
  SEARCH_LIMITS,
  handleSearchWatchRequest,
  matchCountFromJson,
  matchingOfferIds,
  normalizeExplorerFilters,
  offerMatchesFilters,
  stableStringify,
} from './search-watch.js';

const baseOffer = {
  status: 'active',
  cardRequired: false,
  permanent: true,
  quotas: [
    { id: 'storage', metric: 'storage', amount: 500, unit: 'MB', period: 'month', scope: 'account', overage: 'blocked', kind: 'limit' },
    { id: 'requests', metric: 'requests', amount: 10000, unit: 'request', period: 'month', scope: 'account', overage: 'blocked', kind: 'limit' },
  ],
};

test('search launch limits stay explicit', () => {
  assert.deepEqual(SEARCH_LIMITS, { savedSearches: 3, watchedSearches: 1 });
});

test('Explorer filters preserve explicit broad filters and booleans', () => {
  const filters = normalizeExplorerFilters({
    resource: 'storage', period: '', scope: '', overage: 'blocked', cardRequired: false, permanent: true,
  });
  assert.equal(filters.resource, 'storage');
  assert.equal(filters.period, '');
  assert.equal(filters.scope, '');
  assert.equal(filters.overage, 'blocked');
  assert.equal(filters.cardRequired, false);
  assert.equal(filters.permanent, true);
});

test('matching mirrors Explorer offer-level and quota filters', () => {
  const filters = normalizeExplorerFilters({
    resource: 'storage', period: 'month', scope: 'account', overage: 'blocked', cardRequired: false, permanent: true,
  });
  assert.equal(offerMatchesFilters(baseOffer, filters), true);
  assert.equal(offerMatchesFilters({ ...baseOffer, cardRequired: true }, filters), false);
  assert.equal(offerMatchesFilters({ ...baseOffer, permanent: false }, filters), false);
});

test('minimum comparable value is ready for future >= quota rules', () => {
  const accepted = normalizeExplorerFilters({ resource: 'storage', period: 'month', scope: 'account', minimumComparableValue: 500 });
  const rejected = normalizeExplorerFilters({ resource: 'storage', period: 'month', scope: 'account', minimumComparableValue: 501 });
  assert.equal(offerMatchesFilters(baseOffer, accepted), true);
  assert.equal(offerMatchesFilters(baseOffer, rejected), false);
});

test('obsolete offers and non-comparable quotas never match', () => {
  const filters = normalizeExplorerFilters({ resource: 'storage', period: 'month', scope: 'account' });
  assert.equal(offerMatchesFilters({ ...baseOffer, status: 'obsolete' }, filters), false);
  assert.equal(offerMatchesFilters({ ...baseOffer, quotas: [{ id: 'x', metric: 'storage', amount: null, kind: 'not-published', period: 'month', scope: 'account', overage: 'blocked' }] }, filters), false);
});

test('matching offer ids are stable and sorted', () => {
  const filters = normalizeExplorerFilters({ resource: 'storage', period: 'month', scope: 'account' });
  assert.deepEqual(matchingOfferIds({ zeta: baseOffer, alpha: baseOffer }, filters), ['alpha', 'zeta']);
  assert.equal(stableStringify({ b: 1, a: 2 }), stableStringify({ a: 2, b: 1 }));
});

test('matchCount exposes only array baselines', () => {
  assert.equal(matchCountFromJson('["a","b","c"]'), 3);
  assert.equal(matchCountFromJson('[]'), 0);
  assert.equal(matchCountFromJson('{}'), 0);
  assert.equal(matchCountFromJson('invalid'), 0);
});

test('search-watch router ignores unrelated account routes', async () => {
  const response = await handleSearchWatchRequest(
    new Request('https://worker.example/api/account/me'),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr' },
  );
  assert.equal(response, null);
});

test('search-watch API requires D1 before authentication', async () => {
  const response = await handleSearchWatchRequest(
    new Request('https://worker.example/api/account/searches', { headers: { Origin: 'https://gratuitpourlesdevs.fr' } }),
    { ALLOWED_ORIGIN: 'https://gratuitpourlesdevs.fr' },
  );
  assert.equal(response.status, 503);
});
