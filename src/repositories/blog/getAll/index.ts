import { USE_MOCK } from '@/constants/mock';

export const getAllBlogRepository = USE_MOCK
  ? (await import('./repository.mock')).getAllBlogRepository
  : (await import('./repository')).getAllBlogRepository;
