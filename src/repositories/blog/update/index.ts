import { requestSchema, toApiRequest } from './requestSchema';
import { responseSchema, toBlog } from './responseSchema';
import { API_URL } from '@/repositories/blog/config';
import { Blog } from '@/types/blog';

type UpdateBlogInput = {
  id: string;
  title: string;
  content: string;
};

export async function update(input: UpdateBlogInput): Promise<Blog> {
  const validatedInput = requestSchema.parse({
    title: input.title,
    content: input.content,
  });
  const requestBody = toApiRequest(validatedInput);

  const response = await fetch(`${API_URL}/${input.id}`, {
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
