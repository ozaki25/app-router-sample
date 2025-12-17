import { USE_MOCK } from '@/constants/mock';

export const createBlogRepository = USE_MOCK
  ? (await import('./repository.mock')).createBlogRepository
  : (await import('./repository')).createBlogRepository;
