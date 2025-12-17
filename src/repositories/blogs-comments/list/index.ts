import { USE_MOCK } from '@/constants/mock';

export const getBlogComments = USE_MOCK
  ? (await import('./repository.mock')).getBlogComments
  : (await import('./repository')).getBlogComments;
