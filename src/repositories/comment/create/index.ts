import { USE_MOCK } from '@/constants/mock';

export const createCommentRepository = USE_MOCK
  ? (await import('./repository.mock')).createCommentRepository
  : (await import('./repository')).createCommentRepository;
