import { USE_MOCK } from '@/constants/mock';

export const getByIdBlogRepository = USE_MOCK
  ? (await import('./repository.mock')).getByIdBlogRepository
  : (await import('./repository')).getByIdBlogRepository;
