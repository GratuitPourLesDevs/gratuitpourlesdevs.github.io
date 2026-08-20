from pathlib import Path
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
names = re.findall(r'<h3><a href="/offres/[^\"]+/">([^<]+)</a></h3>', html)
assert len(names) == 10, f'10 offres attendues, trouvé {len(names)} : {names}'
print('TOP_10_SOURCE_CODE=' + ' | '.join(names))
