import { DOCUMENT_SCRAPING_QUOTA_SCORES } from './document-scraping-scores';
import './document-scraping-quotas';

export const API_UTILITY_QUOTA_SCORES = {
  ...DOCUMENT_SCRAPING_QUOTA_SCORES,
  'killbait-api': 5,
  kreya: 25,
  loginllama: 15,
  'market-data-api': 15,
  'maxim-ai': 20,
  microlink: 10,
  mintlify: 20,
  mockapi: 10,
  mockerito: 25,
  mockfly: 15,
  mocko: 20,
  'multi-exit-ip-checker': 25,
  'nasdisks-data-api': 25,
  'news-api': 10,
  numlookupapi: 10,
  'ocr-space': 20,
  'openapi-designer': 25,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
