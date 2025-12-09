import { requestSchema, toApiRequest } from './requestSchema';
import { responseSchema, toBlog } from './responseSchema';
import { API_URL } from '@/repositories/blog/config';
import { Blog } from '@/types/blog';

type CreateBlogInput = {
  title: string;
  content: string;
};

export async function create(input: CreateBlogInput): Promise<Blog> {
  const validatedInput = requestSchema.parse(input);
  const requestBody = toApiRequest(validatedInput);

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    throw new Error('Failed to create blog');
  }

  const data = await response.json();
  const validated = responseSchema.parse(data);
  return toBlog(validated);
}
