import { USE_MOCK } from '@/constants/mock';

export const deleteBlogRepository = USE_MOCK
  ? (await import('./repository.mock')).deleteBlogRepository
  : (await import('./repository')).deleteBlogRepository;
