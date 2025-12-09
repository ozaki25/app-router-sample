import { API_URL } from './config';
import { Blog } from '@/types/blog';

export async function getById(id: string): Promise<Blog | null> {
  const response = await fetch(`${API_URL}/${id}`, {
    next: { tags: ['blogs', `blog-${id}`] },
  });
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  return response.json();
}
