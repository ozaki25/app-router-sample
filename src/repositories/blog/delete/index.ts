import { API_URL } from '@/repositories/blog/config';

export async function deleteBlog(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete blog');
  }
}
