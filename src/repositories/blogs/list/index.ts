import { USE_MOCK } from '@/constants/mock';

export const getBlogs = USE_MOCK
  ? (await import('./repository.mock')).getBlogs
  : (await import('./repository')).getBlogs;
