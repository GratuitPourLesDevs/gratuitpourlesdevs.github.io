from pathlib import Path

CONFIG_PATH = Path('src/data/messaging-streaming-guide.ts')
ENGINE_PATH = Path('src/pages/comparatifs/email/meilleures-offres-gratuites.astro')
ROUTE_PATH = Path('src/pages/guides/messagerie-streaming/meilleures-offres-gratuites.astro')
HUB_PATH = Path('src/pages/guides/index.astro')

CONFIG = """import './messaging-platform-quotas';
import './messaging-platform-quotas-more';

export const MESSAGING_STREAMING_GUIDE_CONFIG = {
  categoryLabelFallback: 'Messagerie et streaming',
  fallbackDescription: 'Files de messages, pub/sub, événements, notifications et services temps réel pour développeurs',
  pageTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de messagerie et streaming pour les développeurs`,
  pageDescription: (rankingSize: number) => `Comparatif indépendant des ${rankingSize} meilleures offres gratuites de messagerie, files, événements, notifications et streaming : quotas, score et limites vérifiés.`,
  heroTitle: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de messagerie et streaming`,
  heroIntro: 'Comparatif indépendant des services de messagerie, files, pub/sub, événements, notifications et streaming présents dans le catalogue. Pour relier des services, distribuer des événements ou construire du temps réel, retrouvez les offres gratuites les mieux notées avec leurs volumes et contraintes réellement documentés.',
  rankingTitle: (rankingSize: number) => `Top ${rankingSize} des meilleures offres gratuites de messagerie et streaming`,
  itemListName: (rankingSize: number) => `Les ${rankingSize} meilleures offres gratuites de messagerie et streaming`,
  quotaPriority: ['messages', 'operations', 'requests', 'notifications', 'deliveries', 'devices', 'retention', 'usage_time', 'bandwidth'],
  comparisonIntro: 'La catégorie regroupe files de messages, bus d’événements, pub/sub, notifications et services temps réel. Le tableau sépare donc le volume de messages ou opérations des limites de clients ou appareils lorsque ces données sont structurées.',
  comparisonColumns: [
    { key: 'service' as const, label: 'Service' },
    { key: 'type' as const, label: 'Type de service' },
    { key: 'quota' as const, label: 'Messages / opérations', metrics: ['messages', 'operations', 'requests', 'notifications', 'deliveries', 'emails'] },
    { key: 'quota' as const, label: 'Clients / appareils', metrics: ['devices', 'connections', 'concurrent_connections', 'subscribers', 'recipients', 'users'] },
    { key: 'plan' as const, label: 'Formule gratuite' },
    { key: 'duration' as const, label: 'Gratuité' },
    { key: 'overage' as const, label: 'Dépassement' },
    { key: 'card' as const, label: 'Carte bancaire' },
    { key: 'usage' as const, label: 'Usage idéal' },
  ],
  faqItems: [
    {
      question: 'Quel service de messagerie gratuit choisir pour une application ?',
      answer: 'Le choix dépend du modèle utilisé : file de messages, pub/sub, bus d’événements, notifications push ou temps réel. Le classement met en avant les offres gratuites les plus exploitables, tandis que le comparatif sépare les volumes de messages ou opérations des limites de clients et appareils quand elles sont documentées.',
    },
    {
      question: 'Quelle différence entre une file de messages, du pub/sub et un bus d’événements ?',
      answer: 'Une file distribue généralement chaque message à un consommateur, le pub/sub diffuse un événement à plusieurs abonnés, tandis qu’un bus d’événements route des événements entre producteurs et destinations selon des règles. Certains services du guide couvrent plusieurs de ces modèles.',
    },
    {
      question: 'Ces services de messagerie et streaming sont-ils réellement gratuits ?',
      answer: 'Les offres du classement disposent d’un accès gratuit au moment de leur dernière vérification. Certaines sont permanentes, d’autres limitées par un volume mensuel, quotidien, une durée ou un nombre d’appareils. Les conditions détaillées restent indiquées sur chaque fiche.',
    },
    {
      question: 'Que se passe-t-il lorsque le quota gratuit est dépassé ?',
      answer: 'Cela dépend du fournisseur : le trafic peut être bloqué, dégradé ou devenir facturable. Le comparatif affiche le comportement de dépassement lorsqu’un quota structuré est disponible afin de mieux repérer les risques de facturation.',
    },
  ],
};
"""

CONFIG_PATH.write_text(CONFIG, encoding='utf-8')

engine = ENGINE_PATH.read_text(encoding='utf-8')
import_line = "import { MESSAGING_STREAMING_GUIDE_CONFIG } from '../../../data/messaging-streaming-guide';\n"
if import_line not in engine:
    anchor = "import { SOURCE_CODE_GUIDE_CONFIG } from '../../../data/source-code-guide';\n"
    assert anchor in engine, 'Import source-code-guide introuvable'
    engine = engine.replace(anchor, anchor + import_line, 1)

mapping_line = "  'messagerie-streaming': MESSAGING_STREAMING_GUIDE_CONFIG as GuideConfig,\n"
if mapping_line not in engine:
    anchor = "  'depots-code-source': SOURCE_CODE_GUIDE_CONFIG as GuideConfig,\n"
    assert anchor in engine, 'Mapping Dépôts de code source introuvable'
    engine = engine.replace(anchor, anchor + mapping_line, 1)
ENGINE_PATH.write_text(engine, encoding='utf-8')

ROUTE_PATH.parent.mkdir(parents=True, exist_ok=True)
ROUTE_PATH.write_text("""---
import CategoryGuidePage from '../../comparatifs/email/meilleures-offres-gratuites.astro';
---

<CategoryGuidePage categoryId=\"messagerie-streaming\" />
""", encoding='utf-8')

hub = HUB_PATH.read_text(encoding='utf-8')
if '/guides/messagerie-streaming/meilleures-offres-gratuites/' not in hub:
    anchor = """        <a href=\"/guides/depots-code-source/meilleures-offres-gratuites/\">
          <span class=\"guides-index\">03</span>
          <span class=\"guides-copy\"><small>DÉPÔTS DE CODE SOURCE</small><strong>Les meilleurs hébergements de code source gratuits</strong><em>Dépôts, collaborateurs, stockage, CI/CD, score et limites.</em></span>
          <b aria-hidden=\"true\">→</b>
        </a>
"""
    assert anchor in hub, 'Carte Guide Dépôts de code source introuvable'
    card = anchor + """        <a href=\"/guides/messagerie-streaming/meilleures-offres-gratuites/\">
          <span class=\"guides-index\">04</span>
          <span class=\"guides-copy\"><small>MESSAGERIE & STREAMING</small><strong>Les meilleures offres gratuites de messagerie et streaming</strong><em>Messages, événements, notifications, appareils, score et limites.</em></span>
          <b aria-hidden=\"true\">→</b>
        </a>
"""
    hub = hub.replace(anchor, card, 1)
HUB_PATH.write_text(hub, encoding='utf-8')
