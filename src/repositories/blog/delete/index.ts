import { API_BASE_URL } from '@/constants/api';

export async function deleteBlogRepository(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete blog');
  }
}
