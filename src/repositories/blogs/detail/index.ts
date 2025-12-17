import { USE_MOCK } from '@/constants/mock';

export const getBlog = USE_MOCK
  ? (await import('./repository.mock')).getBlog
  : (await import('./repository')).getBlog;
