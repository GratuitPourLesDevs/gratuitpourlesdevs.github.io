from pathlib import Path
from html import unescape
import json
import re

page = Path('dist/guides/depots-code-source/meilleures-offres-gratuites/index.html')
email = Path('dist/guides/email/meilleures-offres-gratuites/index.html')
api = Path('dist/guides/api-donnees-ml/meilleures-offres-gratuites/index.html')
assert page.exists(), 'Route du guide Dépôts de code source absente'
assert email.exists() and api.exists(), 'Régression sur une route de Guide existante'
html = page.read_text()
for label in ('Dépôts / projets', 'Collaborateurs', 'Stockage', 'CI/CD'):
    assert label in html, f'Comparateur spécifique absent : {label}'
for forbidden in ('Volume d’envoi', 'Domaines / comptes', 'Activité API', 'IA / crédits', 'Données / stockage'):
    assert forbidden not in html, f'Comparateur d’une autre catégorie présent : {forbidden}'
assert 'Volume d’envoi' in email.read_text(), 'Le guide E-mail a perdu ses comparateurs propres'
assert 'IA / crédits' in api.read_text(), 'Le guide API/Data/ML a perdu ses comparateurs propres'

item_list = None
for raw in re.findall(r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.S):
    data = json.loads(unescape(raw).strip())
    candidates = data if isinstance(data, list) else [data]
    for candidate in candidates:
        if isinstance(candidate, dict) and candidate.get('@type') == 'ItemList':
            item_list = candidate
            break
    if item_list:
        break

assert item_list is not None, 'JSON-LD ItemList du classement introuvable'
names = [item.get('name', '').strip() for item in item_list.get('itemListElement', []) if isinstance(item, dict)]
assert len(names) == 10 and all(names), f'10 offres attendues dans ItemList, trouvé {len(names)} : {names}'
print('TOP_10_SOURCE_CODE=' + ' | '.join(names))
