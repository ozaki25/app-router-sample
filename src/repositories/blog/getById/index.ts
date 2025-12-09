import { responseSchema, toBlog } from './responseSchema';
import { API_URL } from '@/repositories/blog/config';
import { Blog } from '@/types/blog';

export async function getByIdBlogRepository(id: string): Promise<Blog | null> {
  const response = await fetch(`${API_URL}/${id}`, {
    next: { tags: ['blogs', `blog-${id}`] },
  });
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }

  const data = await response.json();
  const validated = responseSchema.parse(data);
  return toBlog(validated);
}
