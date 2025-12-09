import { Blog, UpdateBlogInput } from '@/types/blog';
import { API_URL } from './config';

export async function update(input: UpdateBlogInput): Promise<Blog> {
  const response = await fetch(`${API_URL}/${input.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: input.title, content: input.content }),
  });
  if (!response.ok) {
    throw new Error('Failed to update blog');
  }
  return response.json();
}
