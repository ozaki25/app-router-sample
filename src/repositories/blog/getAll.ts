import { API_URL } from './config';
import { Blog } from '@/types/blog';

export async function getAll(): Promise<Blog[]> {
  const response = await fetch(API_URL, {
    next: { tags: ['blogs'] },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
}
