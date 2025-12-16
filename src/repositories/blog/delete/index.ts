import { API_BASE_URL } from '@/constants/api';
import { fetcher } from './fetcher';

export async function deleteBlogRepository(id: string): Promise<void> {
  const response = await fetcher(`${API_BASE_URL}/api/blogs/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete blog');
  }
}
