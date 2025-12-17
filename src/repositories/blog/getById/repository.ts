import { API_BASE_URL } from '@/constants/api';
import { Blog } from '@/types/blog';
import { responseSchema, toBlog } from './responseSchema';

export async function getByIdBlogRepository(id: string): Promise<Blog | null> {
  const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
    cache: 'no-store',
    next: { tags: ['blogs', `blog-${id}`] },
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('Failed to fetch blog');

  const data = await response.json();
  return toBlog(responseSchema.parse(data));
}
