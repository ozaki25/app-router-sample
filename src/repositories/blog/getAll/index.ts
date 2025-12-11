import { responseSchema, toPaginatedBlogs } from './responseSchema';
import { API_BASE_URL } from '@/constants/api';
import { PaginatedBlogs } from '@/types/blog';

export async function getAllBlogRepository(page: number = 1): Promise<PaginatedBlogs> {
  const response = await fetch(`${API_BASE_URL}/blogs?page=${page}`, {
    cache: 'no-store',
    next: { tags: ['blogs'] },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const data = await response.json();
  const validated = responseSchema.parse(data);
  return toPaginatedBlogs(validated);
}
