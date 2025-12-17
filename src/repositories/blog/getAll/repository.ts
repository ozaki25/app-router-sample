import { API_BASE_URL } from '@/constants/api';
import { PaginatedBlogs } from '@/types/blog';
import { responseSchema, toPaginatedBlogs } from './responseSchema';

export async function getAllBlogRepository(page: number = 1): Promise<PaginatedBlogs> {
  const response = await fetch(`${API_BASE_URL}/api/blogs?page=${page}`, {
    cache: 'no-store',
    next: { tags: ['blogs'] },
  });
  if (!response.ok) throw new Error('Failed to fetch blogs');

  const data = await response.json();
  return toPaginatedBlogs(responseSchema.parse(data));
}
