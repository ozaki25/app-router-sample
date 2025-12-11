import { requestSchema, toApiRequest } from './requestSchema';
import { responseSchema, toBlog } from './responseSchema';
import { API_BASE_URL } from '@/constants/api';
import { Blog } from '@/types/blog';

type CreateBlogInput = {
  title: string;
  content: string;
};

export async function createBlogRepository(input: CreateBlogInput): Promise<Blog> {
  const validatedInput = requestSchema.parse(input);
  const requestBody = toApiRequest(validatedInput);

  const response = await fetch(`${API_BASE_URL}/api/blogs`, {
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
