import { API_UTILITY_QUOTA_SCORES } from './api-utility-scores';
import { CMS_PLATFORM_QUOTA_SCORES } from './cms-platform-scores';
import { COLLABORATION_BATCH_QUOTA_SCORES } from './collaboration-batch-scores';
import { COLLABORATION_SERVICES_QUOTA_SCORES } from './collaboration-services-scores';
import { COLLABORATION_TOOLS_QUOTA_SCORES } from './collaboration-tools-scores';
import { IP_JSON_AI_QUOTA_SCORES } from './ip-json-ai-scores';
import { PACKAGE_HOSTING_QUOTA_SCORES } from './package-hosting-scores';
import './api-utility-quotas';
import './cms-platform-quotas';
import './collaboration-batch-quotas';
import './collaboration-services-quotas';
import './collaboration-tools-quotas';
import './package-hosting-quotas';

export const DATA_TOOLS_QUOTA_SCORES = {
  ...API_UTILITY_QUOTA_SCORES,
  ...CMS_PLATFORM_QUOTA_SCORES,
  ...COLLABORATION_BATCH_QUOTA_SCORES,
  ...COLLABORATION_SERVICES_QUOTA_SCORES,
  ...COLLABORATION_TOOLS_QUOTA_SCORES,
  ...IP_JSON_AI_QUOTA_SCORES,
  ...PACKAGE_HOSTING_QUOTA_SCORES,
  'data-fetcher': 15,
  'data-miner': 15,
  'dataimporter-io': 20,
  datalore: 20,
  'db-designer': 15,
  'db-ip': 15,
  deepar: 10,
  deepnote: 20,
  'compare-json': 20,
  'disease-sh': 15,
  doczilla: 15,
  doppio: 20,
  docpenny: 15,
  doqlo: 15,
  drawdb: 25,
  dynamicdocs: 10,
  'earnings-feed': 20,
  'export-sdk': 15,
  'extendsclass-rest-client': 20,
  'financial-data': 15,
  finlight: 20,
  firecrawl: 20,
  'format-json-online': 25,
  'fraudlabs-pro': 15,
  freeipapi: 25,
  'geolocated-io': 20,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
