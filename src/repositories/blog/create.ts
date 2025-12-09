import { API_URL } from './config';
import { Blog } from '@/types/blog';

type CreateBlogInput = {
  title: string;
  content: string;
};

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
