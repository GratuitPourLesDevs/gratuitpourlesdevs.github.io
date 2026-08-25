from pathlib import Path
import re
from collections import defaultdict, Counter

OFFERS_DIR = Path('src/content/offres')
CATEGORIES_DIR = Path('src/content/categories')
QUOTAS_FILE = Path('src/data/offer-quotas.ts')
EXISTING_GUIDES = {'email', 'api-donnees-ml', 'depots-code-source'}
FOCUS_CATEGORIES = {'messagerie-streaming', 'cdn-protection', 'ci-cd', 'paas', 'supervision', 'tickets-projets'}


def frontmatter_value(text: str, key: str):
    match = re.search(rf'(?m)^{re.escape(key)}:\s*["\']?([^\n"\']+)', text)
    return match.group(1).strip() if match else None


def category_labels():
    labels = {}
    for path in CATEGORIES_DIR.glob('*.md'):
        text = path.read_text(encoding='utf-8')
        labels[path.stem] = frontmatter_value(text, 'nom') or path.stem
    return labels


def quota_metrics_by_offer():
    text = QUOTAS_FILE.read_text(encoding='utf-8')
    result = defaultdict(set)
    current = None
    for line in text.splitlines():
        key_match = re.match(r"^\s{2}'([^']+)':\s*\[", line)
        if key_match:
            current = key_match.group(1)
        if current:
            for metric in re.findall(r"metric:\s*'([^']+)'", line):
                result[current].add(metric)
        if current and re.match(r'^\s{2}\],?\s*$', line):
            current = None
    return result

labels = category_labels()
quota_metrics = quota_metrics_by_offer()
category_offers = defaultdict(list)

for path in OFFERS_DIR.glob('*.md'):
    text = path.read_text(encoding='utf-8')
    category = frontmatter_value(text, 'categorie')
    status = frontmatter_value(text, 'statut') or 'active'
    name = frontmatter_value(text, 'nom') or path.stem
    if not category or status == 'obsolete':
        continue
    category_offers[category].append({
        'id': path.stem,
        'name': name,
        'metrics': quota_metrics.get(path.stem, set()),
    })

rows = []
for category, offers in category_offers.items():
    if category in EXISTING_GUIDES:
        continue
    with_quota = [o for o in offers if o['metrics']]
    metrics = Counter(m for o in offers for m in o['metrics'])
    coverage = len(with_quota) / len(offers) if offers else 0
    repeated_metrics = [m for m, count in metrics.items() if count >= 3]
    score = len(offers) + len(with_quota) * 2 + len(repeated_metrics) * 3
    rows.append((score, category, offers, with_quota, metrics, repeated_metrics, coverage))

rows.sort(reverse=True)
print('=== CANDIDATES_GUIDE ===')
for score, category, offers, with_quota, metrics, repeated_metrics, coverage in rows[:25]:
    print(
        f'{category}|label={labels.get(category, category)}|active={len(offers)}|'
        f'quota_offers={len(with_quota)}|coverage={coverage:.0%}|'
        f'repeated_metrics={",".join(repeated_metrics[:10])}|score={score}'
    )

print('\n=== FOCUS_DETAIL ===')
for score, category, offers, with_quota, metrics, repeated_metrics, coverage in rows:
    if category not in FOCUS_CATEGORIES:
        continue
    print(f'CATEGORY={category} ({labels.get(category, category)}) active={len(offers)} quota={len(with_quota)} coverage={coverage:.0%}')
    print('METRICS=' + ' | '.join(f'{m}:{count}' for m, count in metrics.most_common(20)))
    print('OFFERS=' + ' | '.join(
        f"{o['name']}<{o['id']}>[{','.join(sorted(o['metrics'])) or '-'}]" for o in sorted(offers, key=lambda x: x['name'].lower())
    ))
    print()
