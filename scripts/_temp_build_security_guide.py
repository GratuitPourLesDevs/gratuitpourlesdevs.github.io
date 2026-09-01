from pathlib import Path

ENGINE_PATH = Path('src/pages/comparatifs/email/meilleures-offres-gratuites.astro')
HUB_PATH = Path('src/pages/guides/index.astro')

engine = ENGINE_PATH.read_text(encoding='utf-8')
import_line = "import { SECURITY_GUIDE_CONFIG } from '../../../data/security-guide';\n"
if import_line not in engine:
    anchor = "import { CI_CD_GUIDE_CONFIG } from '../../../data/ci-cd-guide';\n"
    assert anchor in engine, 'Import CI/CD introuvable'
    engine = engine.replace(anchor, anchor + import_line, 1)

mapping_line = "  'securite-pki': SECURITY_GUIDE_CONFIG as GuideConfig,\n"
if mapping_line not in engine:
    anchor = "  'ci-cd': CI_CD_GUIDE_CONFIG as GuideConfig,\n"
    assert anchor in engine, 'Mapping CI/CD introuvable'
    engine = engine.replace(anchor, anchor + mapping_line, 1)
ENGINE_PATH.write_text(engine, encoding='utf-8')

hub = HUB_PATH.read_text(encoding='utf-8')
if '/guides/securite-pki/meilleures-offres-gratuites/' not in hub:
    anchor = """  {
    href: '/guides/ci-cd/meilleures-offres-gratuites/',
    category: 'CI/CD',
    title: 'Les meilleures offres gratuites pour vos pipelines CI/CD',
    description: 'Comparez builds, déploiements, compute, crédits, concurrence et capacité d’équipe.',
    signals: ['Builds / deploys', 'Compute / crédits', 'Concurrence'],
  },
"""
    assert anchor in hub, 'Entrée CI/CD du hub introuvable'
    addition = anchor + """  {
    href: '/guides/securite-pki/meilleures-offres-gratuites/',
    category: 'SÉCURITÉ & PKI',
    title: 'Les meilleures offres gratuites de sécurité et PKI',
    description: 'Comparez scans, actifs, secrets, certificats et conditions d’accès.',
    signals: ['Analyses / scans', 'Actifs protégés', 'Secrets / certificats'],
  },
"""
    hub = hub.replace(anchor, addition, 1)
HUB_PATH.write_text(hub, encoding='utf-8')
