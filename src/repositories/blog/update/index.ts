import { API_BASE_URL } from '@/constants/api';
import { Blog } from '@/types/blog';
import { fetcher } from './fetcher';
import { requestSchema, toApiRequest } from './requestSchema';
import { responseSchema, toBlog } from './responseSchema';

type UpdateBlogInput = {
  id: string;
  title: string;
  content: string;
};

export async function updateBlogRepository(input: UpdateBlogInput): Promise<Blog> {
  const validatedInput = requestSchema.parse({
    title: input.title,
    content: input.content,
  });
  const requestBody = toApiRequest(validatedInput);

  const response = await fetcher(`${API_BASE_URL}/api/blogs/${input.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    throw new Error('Failed to update blog');
  }

  const data = await response.json();
  const validated = responseSchema.parse(data);
  return toBlog(validated);
}
