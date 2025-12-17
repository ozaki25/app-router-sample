import { USE_MOCK } from '@/constants/mock';

export const updateBlogRepository = USE_MOCK
  ? (await import('./repository.mock')).updateBlogRepository
  : (await import('./repository')).updateBlogRepository;
