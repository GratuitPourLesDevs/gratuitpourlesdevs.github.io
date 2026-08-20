from pathlib import Path

engine_path = Path('src/pages/comparatifs/email/meilleures-offres-gratuites.astro')
engine = engine_path.read_text()
import_line = "import { SOURCE_CODE_GUIDE_CONFIG } from '../../../data/source-code-guide';\n"
if import_line not in engine:
    anchor = "import { formatQuotaAmount, formatQuotaOverage, formatQuotaPeriod, getOfferQuotas, type OfferQuota } from '../../../data/offer-quotas';\n"
    assert anchor in engine
    engine = engine.replace(anchor, anchor + import_line, 1)
if "  'depots-code-source': SOURCE_CODE_GUIDE_CONFIG as GuideConfig," not in engine:
    anchor = "const GUIDE_CONFIGS: Record<string, GuideConfig> = {\n"
    assert anchor in engine
    engine = engine.replace(anchor, anchor + "  'depots-code-source': SOURCE_CODE_GUIDE_CONFIG as GuideConfig,\n", 1)
engine_path.write_text(engine)

score_path = Path('src/data/free-tier-score.ts')
score = score_path.read_text()
score_import = "import { SOURCE_CODE_GUIDE_QUOTA_SCORES } from './source-code-guide';\n"
if score_import not in score:
    anchor = "import { DATA_TOOLS_QUOTA_SCORES } from './data-tools-scores';\n"
    assert anchor in score
    score = score.replace(anchor, anchor + score_import, 1)
if '  ...SOURCE_CODE_GUIDE_QUOTA_SCORES,\n' not in score:
    anchor = "  ...DATA_TOOLS_QUOTA_SCORES,\n"
    assert anchor in score
    score = score.replace(anchor, anchor + "  ...SOURCE_CODE_GUIDE_QUOTA_SCORES,\n", 1)
score_path.write_text(score)

hub_path = Path('src/pages/guides/index.astro')
hub = hub_path.read_text()
if '/guides/depots-code-source/meilleures-offres-gratuites/' not in hub:
    marker = """        <a href=\"/guides/api-donnees-ml/meilleures-offres-gratuites/\">
          <span class=\"guides-index\">02</span>
          <span class=\"guides-copy\"><small>API, DONNÉES & ML</small><strong>Les meilleures offres gratuites — API, données et machine learning</strong><em>Classement, quotas clés, score, permanence, carte bancaire et usages.</em></span>
          <b aria-hidden=\"true\">→</b>
        </a>
"""
    assert marker in hub
    addition = marker + """        <a href=\"/guides/depots-code-source/meilleures-offres-gratuites/\">
          <span class=\"guides-index\">03</span>
          <span class=\"guides-copy\"><small>DÉPÔTS DE CODE SOURCE</small><strong>Les meilleurs hébergements de code source gratuits</strong><em>Dépôts, collaborateurs, stockage, CI/CD, score et limites.</em></span>
          <b aria-hidden=\"true\">→</b>
        </a>
"""
    hub = hub.replace(marker, addition, 1)
hub_path.write_text(hub)
