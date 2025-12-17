import { API_BASE_URL } from '@/constants/api';
import { COMMENTS_PER_PAGE } from '@/constants/comment';
import { PaginatedComments } from '@/types/comment';
import { responseSchema, toPaginatedComments } from './responseSchema';

export async function getBlogComments(
  blogId: string,
  page: number = 1
): Promise<PaginatedComments> {
  const response = await fetch(
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
