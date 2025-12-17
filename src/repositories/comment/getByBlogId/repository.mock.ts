import { COMMENTS_PER_PAGE } from '@/constants/comment';
import { getCommentsByBlogId } from '@/mock/data';
import { PaginatedComments } from '@/types/comment';
import { responseSchema, toPaginatedComments } from './responseSchema';

export async function getCommentsByBlogIdRepository(
  blogId: string,
  page: number = 1
): Promise<PaginatedComments> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const data = getCommentsByBlogId({
    blogId,
    total: 15,
    currentPage: page,
    perPage: COMMENTS_PER_PAGE,
  });
  return toPaginatedComments(responseSchema.parse(data));
}
