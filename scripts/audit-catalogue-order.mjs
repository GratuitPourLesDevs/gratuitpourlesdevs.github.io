import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const OFFERS_DIR = new URL('../src/content/offres/', import.meta.url);

function readScalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!match) return undefined;
  return match[1].replace(/^['"]|['"]$/g, '');
}

const files = (await readdir(OFFERS_DIR)).filter((name) => name.endsWith('.md')).sort();
const offers = [];

for (const file of files) {
  const content = await readFile(join(OFFERS_DIR.pathname, file), 'utf8');
  const [, frontmatter = ''] = content.split(/^---\s*$/m, 3);
  const status = readScalar(frontmatter, 'statut') ?? 'active';
  const rawOrder = readScalar(frontmatter, 'ordre');
  const order = rawOrder === undefined ? 100 : Number(rawOrder);
  offers.push({ id: file.replace(/\.md$/, ''), status, order });
}

const visible = offers.filter((offer) => offer.status !== 'obsolete');
const active = offers.filter((offer) => offer.status === 'active');
const toVerify = offers.filter((offer) => offer.status === 'a_verifier');
const obsolete = offers.filter((offer) => offer.status === 'obsolete');

const byOrder = new Map();
for (const offer of visible) {
  const ids = byOrder.get(offer.order) ?? [];
  ids.push(offer.id);
  byOrder.set(offer.order, ids);
}

const duplicateOrders = [...byOrder.entries()]
  .filter(([, ids]) => ids.length > 1)
  .sort(([a], [b]) => a - b);

const numericOrders = visible.map((offer) => offer.order).filter(Number.isFinite).sort((a, b) => a - b);
const minOrder = numericOrders[0] ?? null;
const maxOrder = numericOrders.at(-1) ?? null;
const distinctOrders = new Set(numericOrders);
const gaps = [];
if (minOrder !== null && maxOrder !== null) {
  for (let value = minOrder; value <= maxOrder; value += 1) {
    if (!distinctOrders.has(value)) gaps.push(value);
  }
}

console.log('Audit du catalogue GratuitPourLesDevs');
console.log(`- Fichiers d’offres : ${offers.length}`);
console.log(`- Visibles (active + a_verifier) : ${visible.length}`);
console.log(`- Actives : ${active.length}`);
console.log(`- À vérifier : ${toVerify.length}`);
console.log(`- Obsolètes / archives : ${obsolete.length}`);
console.log(`- Clé ordre min/max visible : ${minOrder ?? 'n/a'} → ${maxOrder ?? 'n/a'}`);
console.log(`- Valeurs d’ordre manquantes dans cet intervalle : ${gaps.length}`);
console.log(`- Valeurs d’ordre dupliquées : ${duplicateOrders.length}`);

if (duplicateOrders.length) {
  console.log('\nDoublons de clé ordre :');
  for (const [order, ids] of duplicateOrders) console.log(`  ${order}: ${ids.join(', ')}`);
}

console.log('\nRappel : `ordre` est une clé de tri interne et peut être non continue.');
console.log('Le nombre réel d’offres visibles est le compteur « Visibles », pas la valeur maximale de `ordre`.');
