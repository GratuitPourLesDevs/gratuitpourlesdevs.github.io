import fs from 'node:fs';
import path from 'node:path';

const stripValue = (value) => value.trim().replace(/^['"]|['"]$/g, '');

const readScalar = (frontmatter, key) => {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match ? stripValue(match[1]) : '';
};

const readList = (frontmatter, key) => {
  const lines = frontmatter.split(/\r?\n/);
  const inline = lines.find((line) => new RegExp(`^${key}:\\s*\\[`).test(line));
  if (inline) {
    const raw = inline.slice(inline.indexOf('[') + 1, inline.lastIndexOf(']'));
    return [...raw.matchAll(/"([^"]+)"|'([^']+)'|([^,]+)/g)].map((match) => stripValue(match[1] ?? match[2] ?? match[3])).filter(Boolean);
  }
  const start = lines.findIndex((line) => line.trim() === `${key}:`);
  if (start === -1) return [];
  const values = [];
  for (const line of lines.slice(start + 1)) {
    if (/^[A-Za-zÀ-ÿ_][^:]*:/.test(line)) break;
    const match = line.match(/^\s*-\s+(.+)$/);
    if (match) values.push(stripValue(match[1]));
  }
  return values;
};

export const slugifyIndexablePath = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const categoryAliases = new Map([
  ['services-donnees-manages', 'database'],
  ['hebergement-web', 'hebergement'],
  ['supervision', 'monitoring'],
  ['email', 'email'],
]);

export function getIndexabilitySnapshot(root = process.cwd()) {
  const offersDirectory = path.join(root, 'src/content/offres');
  const categoryCounts = new Map();
  const usageCounts = new Map();
  const obsoleteOfferPaths = new Set();

  for (const file of fs.readdirSync(offersDirectory).filter((name) => name.endsWith('.md'))) {
    const source = fs.readFileSync(path.join(offersDirectory, file), 'utf8');
    const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] ?? '';
    const offerPath = `/offres/${file.slice(0, -3)}/`;
    if (readScalar(frontmatter, 'statut') === 'obsolete') {
      obsoleteOfferPaths.add(offerPath);
      continue;
    }
    const category = readScalar(frontmatter, 'categorie');
    if (category) categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
    for (const usage of readList(frontmatter, 'usages')) usageCounts.set(usage, (usageCounts.get(usage) ?? 0) + 1);
  }

  const thinCategoryPaths = new Set([...categoryCounts]
    .filter(([, count]) => count < 3)
    .map(([identifier]) => `/categories/${categoryAliases.get(identifier) ?? slugifyIndexablePath(identifier)}/`));
  const thinUsagePaths = new Set([...usageCounts]
    .filter(([, count]) => count < 3)
    .map(([usage]) => `/usages/${slugifyIndexablePath(usage)}/`));

  return { obsoleteOfferPaths, thinCategoryPaths, thinUsagePaths };
}
