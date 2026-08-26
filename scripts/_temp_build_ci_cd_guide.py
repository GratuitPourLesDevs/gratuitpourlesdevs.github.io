from pathlib import Path

ENGINE_PATH = Path('src/pages/comparatifs/email/meilleures-offres-gratuites.astro')
HUB_PATH = Path('src/pages/guides/index.astro')

engine = ENGINE_PATH.read_text(encoding='utf-8')
import_line = "import { CI_CD_GUIDE_CONFIG } from '../../../data/ci-cd-guide';\n"
if import_line not in engine:
    anchor = "import { TESTING_GUIDE_CONFIG } from '../../../data/testing-guide';\n"
    assert anchor in engine, 'Import Tests introuvable'
    engine = engine.replace(anchor, anchor + import_line, 1)

mapping_line = "  'ci-cd': CI_CD_GUIDE_CONFIG as GuideConfig,\n"
if mapping_line not in engine:
    anchor = "  tests: TESTING_GUIDE_CONFIG as GuideConfig,\n"
    assert anchor in engine, 'Mapping Tests introuvable'
    engine = engine.replace(anchor, anchor + mapping_line, 1)
ENGINE_PATH.write_text(engine, encoding='utf-8')

hub = HUB_PATH.read_text(encoding='utf-8')
if '/guides/ci-cd/meilleures-offres-gratuites/' not in hub:
    anchor = """  {
    href: '/guides/tests/meilleures-offres-gratuites/',
    category: 'TESTS',
    title: 'Les meilleures offres gratuites pour tester ses applications',
    description: 'Comparez exécutions, environnements, parallélisme, projets et historique.',
    signals: ['Tests / runs', 'Parallélisme', 'Historique'],
  },
"""
    assert anchor in hub, 'Entrée Tests du hub introuvable'
    addition = anchor + """  {
    href: '/guides/ci-cd/meilleures-offres-gratuites/',
    category: 'CI/CD',
    title: 'Les meilleures offres gratuites pour vos pipelines CI/CD',
    description: 'Comparez builds, déploiements, compute, crédits, concurrence et capacité d’équipe.',
    signals: ['Builds / deploys', 'Compute / crédits', 'Concurrence'],
  },
"""
    hub = hub.replace(anchor, addition, 1)
HUB_PATH.write_text(hub, encoding='utf-8')
