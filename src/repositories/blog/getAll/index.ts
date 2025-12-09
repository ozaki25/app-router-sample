import { responseSchema, toBlog } from './responseSchema';
import { API_URL } from '@/repositories/blog/config';
import { Blog } from '@/types/blog';
import { z } from 'zod';

export async function getAllBlogRepository(): Promise<Blog[]> {
  const response = await fetch(API_URL, {
    next: { tags: ['blogs'] },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const data = await response.json();
  const validated = z.array(responseSchema).parse(data);
  return validated.map(toBlog);
}
