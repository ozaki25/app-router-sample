import { fetcher } from './fetcher';
import { responseSchema, toPaginatedComments } from './responseSchema';
import { API_BASE_URL } from '@/constants/api';
import { COMMENTS_PER_PAGE } from '@/constants/comment';
import { PaginatedComments } from '@/types/comment';

export async function getCommentsByBlogIdRepository(
  blogId: string,
  page: number = 1
): Promise<PaginatedComments> {
  const response = await fetcher(
    `${API_BASE_URL}/api/blogs/${blogId}/comments?page=${page}&per_page=${COMMENTS_PER_PAGE}`,
    {
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }

  const data = await response.json();
  const validated = responseSchema.parse(data);
  return toPaginatedComments(validated);
}
