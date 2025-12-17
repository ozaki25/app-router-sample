import { USE_MOCK } from '@/constants/mock';

export const createBlog = USE_MOCK
  ? (await import('./repository.mock')).createBlog
  : (await import('./repository')).createBlog;
