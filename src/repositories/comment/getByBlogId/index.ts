import { USE_MOCK } from '@/constants/mock';

export const getCommentsByBlogIdRepository = USE_MOCK
  ? (await import('./repository.mock')).getCommentsByBlogIdRepository
  : (await import('./repository')).getCommentsByBlogIdRepository;
