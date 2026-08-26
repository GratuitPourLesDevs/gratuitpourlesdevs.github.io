from pathlib import Path

ENGINE_PATH = Path('src/pages/comparatifs/email/meilleures-offres-gratuites.astro')
HUB_PATH = Path('src/pages/guides/index.astro')

engine = ENGINE_PATH.read_text(encoding='utf-8')
import_line = "import { TESTING_GUIDE_CONFIG } from '../../../data/testing-guide';\n"
if import_line not in engine:
    anchor = "import { SUPERVISION_GUIDE_CONFIG } from '../../../data/supervision-guide';\n"
    assert anchor in engine, 'Import Supervision introuvable'
    engine = engine.replace(anchor, anchor + import_line, 1)

mapping_line = "  tests: TESTING_GUIDE_CONFIG as GuideConfig,\n"
if mapping_line not in engine:
    anchor = "  supervision: SUPERVISION_GUIDE_CONFIG as GuideConfig,\n"
    assert anchor in engine, 'Mapping Supervision introuvable'
    engine = engine.replace(anchor, anchor + mapping_line, 1)
ENGINE_PATH.write_text(engine, encoding='utf-8')

hub = HUB_PATH.read_text(encoding='utf-8')
if '/guides/tests/meilleures-offres-gratuites/' not in hub:
    anchor = """  {
    href: '/guides/supervision/meilleures-offres-gratuites/',
    category: 'SUPERVISION',
    title: 'Les meilleures offres gratuites de supervision',
    description: 'Comparez monitoring, uptime, observabilité, fréquence de contrôle et rétention.',
    signals: ['Monitoring', 'Uptime', 'Rétention'],
  },
"""
    assert anchor in hub, 'Entrée Supervision du hub introuvable'
    addition = anchor + """  {
    href: '/guides/tests/meilleures-offres-gratuites/',
    category: 'TESTS',
    title: 'Les meilleures offres gratuites pour tester ses applications',
    description: 'Comparez exécutions, environnements, parallélisme, projets et historique.',
    signals: ['Tests / runs', 'Parallélisme', 'Historique'],
  },
"""
    hub = hub.replace(anchor, addition, 1)
HUB_PATH.write_text(hub, encoding='utf-8')
