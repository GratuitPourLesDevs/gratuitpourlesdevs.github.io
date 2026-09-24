const NAVIGATION_PATHS = new Set([
  '/',
  '/categories/',
  '/comparaisons/',
  '/docs/',
  '/guides/',
  '/stacks/',
  '/usages/',
]);

const NAVIGATION_PREFIXES = [
  '/admin/',
  '/archives/',
  '/compte/',
  '/explorer/',
  '/filtres/',
  '/recherche/',
  '/search/',
];

const normalizePathname = (pathname = '/') => {
  const normalized = `/${String(pathname).replace(/^\/+|\/+$/g, '')}`;
  return normalized === '/' ? '/' : `${normalized}/`;
};

export const hasNoIndexDirective = (robots = '') => String(robots)
  .toLowerCase()
  .split(',')
  .some((directive) => directive.trim() === 'noindex');

export const isAdvertisingEligiblePath = (pathname = '/', robots = '') => {
  const normalizedPathname = normalizePathname(pathname);
  if (hasNoIndexDirective(robots)) return false;
  if (NAVIGATION_PREFIXES.some((prefix) => normalizedPathname.startsWith(prefix))) return false;
  return !NAVIGATION_PATHS.has(normalizedPathname);
};
