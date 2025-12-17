import { USE_MOCK } from '@/constants/mock';

export const deleteBlog = USE_MOCK
  ? (await import('./repository.mock')).deleteBlog
  : (await import('./repository')).deleteBlog;
