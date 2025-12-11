import { responseSchema, toPaginatedBlogs } from './responseSchema';
import { API_BASE_URL } from '@/constants/api';
import { PaginatedBlogs } from '@/types/blog';

export async function getAllBlogRepository(page: number = 1): Promise<PaginatedBlogs> {
  console.log('Fetching blogs from:', `${API_BASE_URL}/api/blogs?page=${page}`);

  const response = await fetch(`${API_BASE_URL}/api/blogs?page=${page}`, {
    cache: 'no-store',
    next: { tags: ['blogs'] },
  });
  console.log('Response status:', response.status);
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const data = await response.json();
  const validated = responseSchema.parse(data);
  return toPaginatedBlogs(validated);
}
