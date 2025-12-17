import { USE_MOCK } from '@/constants/mock';

export const updateBlog = USE_MOCK
  ? (await import('./repository.mock')).updateBlog
  : (await import('./repository')).updateBlog;
