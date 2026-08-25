from pathlib import Path

CONFIG_PATH = Path('src/data/supervision-guide.ts')
ENGINE_PATH = Path('src/pages/comparatifs/email/meilleures-offres-gratuites.astro')
ROUTE_PATH = Path('src/pages/guides/supervision/meilleures-offres-gratuites.astro')
HUB_PATH = Path('src/pages/guides/index.astro')

CONFIG = """export const SUPERVISION_GUIDE_CONFIG = {
  categoryLabelFallback: 'Supervision',
  fallbackDescription: 'Outils de monitoring, observabilité, uptime et alerting pour développeurs',
  pageTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de supervision pour les développeurs`,
  pageDescription: (rankingSize: number) => `Comparatif indépendant des ${rankingSize} meilleures offres gratuites de supervision, monitoring et observabilité : quotas, score, fréquence, rétention et limites vérifiés.`,
  heroTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de supervision`,
  heroIntro: 'Comparatif indépendant des outils de monitoring, uptime, observabilité et alerting présents dans le catalogue. Pour surveiller un site, une API, une infrastructure ou une application, retrouvez les offres gratuites les mieux notées avec leurs capacités, fréquences de contrôle et contraintes réellement documentées.',
  rankingTitle: (rankingSize: number) => `Top ${rankingSize} des meilleures offres gratuites de supervision`,
  itemListName: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de supervision`,
  quotaPriority: ['monitors', 'services', 'hosts', 'nodes', 'synthetic_checks', 'checks', 'monitoring_events', 'transactions', 'data_ingest', 'check_interval', 'retention'],
  comparisonIntro: 'La supervision couvre aussi bien l’uptime simple que l’observabilité complète. Le tableau distingue donc le nombre de ressources surveillées, les volumes de checks ou d’événements et les contraintes de fréquence ou de rétention lorsqu’elles sont structurées.',
  comparisonColumns: [
    { key: 'service' as const, label: 'Service' },
    { key: 'type' as const, label: 'Type de supervision' },
    { key: 'quota' as const, label: 'Ressources surveillées', metrics: ['monitors', 'services', 'hosts', 'nodes', 'sites', 'pages', 'targets'] },
    { key: 'quota' as const, label: 'Volume / événements', metrics: ['synthetic_checks', 'checks', 'monitoring_events', 'transactions', 'test_results', 'api_requests', 'data_ingest'] },
    { key: 'quota' as const, label: 'Fréquence / rétention', metrics: ['check_interval', 'retention'] },
    { key: 'plan' as const, label: 'Formule gratuite' },
    { key: 'duration' as const, label: 'Gratuité' },
    { key: 'overage' as const, label: 'Dépassement' },
    { key: 'card' as const, label: 'Carte bancaire' },
    { key: 'usage' as const, label: 'Usage idéal' },
  ],
  faqItems: [
    {
      question: 'Quel outil de supervision gratuit choisir pour un projet ?',
      answer: 'Pour un site ou une API, le nombre de monitors et la fréquence des contrôles sont souvent prioritaires. Pour une application ou une infrastructure, l’ingestion, les métriques, les traces, les logs et la rétention deviennent plus importantes. Le classement combine ces capacités avec la permanence du gratuit, la carte bancaire, les restrictions et la fraîcheur de vérification.',
    },
    {
      question: 'Quelle différence entre monitoring uptime et observabilité ?',
      answer: 'Le monitoring uptime vérifie principalement qu’un service répond correctement à intervalles réguliers. L’observabilité va plus loin en regroupant métriques, logs, traces, événements ou tests synthétiques pour comprendre pourquoi un système se dégrade ou tombe en panne.',
    },
    {
      question: 'Ces services de supervision sont-ils réellement gratuits ?',
      answer: 'Les offres classées disposent d’un accès gratuit lors de leur dernière vérification. Les limites peuvent porter sur le nombre de monitors, les volumes ingérés, la fréquence des contrôles, la rétention ou certaines fonctions avancées. Les conditions détaillées restent visibles sur chaque fiche.',
    },
    {
      question: 'Que se passe-t-il lorsque le quota gratuit de monitoring est dépassé ?',
      answer: 'Le comportement dépend du fournisseur : ajout de nouveaux monitors bloqué, réduction de la collecte, limitation de l’accès ou passage à une offre payante. Le comparatif affiche le comportement de dépassement lorsqu’il est documenté dans les données structurées.',
    },
  ],
};
"""

CONFIG_PATH.write_text(CONFIG, encoding='utf-8')

engine = ENGINE_PATH.read_text(encoding='utf-8')
import_line = "import { SUPERVISION_GUIDE_CONFIG } from '../../../data/supervision-guide';\n"
if import_line not in engine:
    anchor = "import { SOURCE_CODE_GUIDE_CONFIG } from '../../../data/source-code-guide';\n"
    assert anchor in engine, 'Import source-code-guide introuvable'
    engine = engine.replace(anchor, anchor + import_line, 1)

mapping_line = "  supervision: SUPERVISION_GUIDE_CONFIG as GuideConfig,\n"
if mapping_line not in engine:
    anchor = "  'depots-code-source': SOURCE_CODE_GUIDE_CONFIG as GuideConfig,\n"
    assert anchor in engine, 'Mapping Dépôts de code source introuvable'
    engine = engine.replace(anchor, anchor + mapping_line, 1)
ENGINE_PATH.write_text(engine, encoding='utf-8')

ROUTE_PATH.parent.mkdir(parents=True, exist_ok=True)
ROUTE_PATH.write_text("""---
import CategoryGuidePage from '../../comparatifs/email/meilleures-offres-gratuites.astro';
---

<CategoryGuidePage categoryId=\"supervision\" />
""", encoding='utf-8')

hub = HUB_PATH.read_text(encoding='utf-8')
if '/guides/supervision/meilleures-offres-gratuites/' not in hub:
    anchor = """        <a href=\"/guides/depots-code-source/meilleures-offres-gratuites/\">
          <span class=\"guides-index\">03</span>
          <span class=\"guides-copy\"><small>DÉPÔTS DE CODE SOURCE</small><strong>Les meilleurs hébergements de code source gratuits</strong><em>Dépôts, collaborateurs, stockage, CI/CD, score et limites.</em></span>
          <b aria-hidden=\"true\">→</b>
        </a>
"""
    assert anchor in hub, 'Carte Guide Dépôts de code source introuvable'
    card = anchor + """        <a href=\"/guides/supervision/meilleures-offres-gratuites/\">
          <span class=\"guides-index\">04</span>
          <span class=\"guides-copy\"><small>SUPERVISION</small><strong>Les meilleures offres gratuites de supervision</strong><em>Monitoring, uptime, observabilité, fréquence, rétention, score et limites.</em></span>
          <b aria-hidden=\"true\">→</b>
        </a>
"""
    hub = hub.replace(anchor, card, 1)
HUB_PATH.write_text(hub, encoding='utf-8')
