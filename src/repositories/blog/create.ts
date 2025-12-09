import { Blog, CreateBlogInput } from '@/types/blog';
import { API_URL } from './config';

export async function create(input: CreateBlogInput): Promise<Blog> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });
  if (!response.ok) {
    throw new Error('Failed to create blog');
  }
  return response.json();
}
