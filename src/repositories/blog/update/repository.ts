import { API_BASE_URL } from '@/constants/api';
import { Blog } from '@/types/blog';
import { responseSchema, toBlog } from './responseSchema';

export type UpdateBlogInput = {
  id: string;
  title: string;
  content: string;
};

export async function updateBlogRepository(input: UpdateBlogInput): Promise<Blog> {
  const response = await fetch(`${API_BASE_URL}/api/blogs/${input.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    throw new Error('Failed to update blog');
  }

  const data = await response.json();
  const validated = responseSchema.parse(data);
  return toBlog(validated);
}
