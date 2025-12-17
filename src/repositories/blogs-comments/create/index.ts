import { USE_MOCK } from '@/constants/mock';

export const createBlogComment = USE_MOCK
  ? (await import('./repository.mock')).createBlogComment
  : (await import('./repository')).createBlogComment;
