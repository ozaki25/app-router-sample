import { API_BASE_URL } from '@/constants/api';
import { fetcher } from './fetcher';
import { requestSchema, toApiRequest } from './requestSchema';

type CreateCommentInput = {
  blogId: string;
  content: string;
};

export async function createCommentRepository(input: CreateCommentInput): Promise<void> {
  const validatedInput = requestSchema.parse(input);
  const requestBody = toApiRequest(validatedInput);

  const response = await fetcher(`${API_BASE_URL}/api/blogs/${input.blogId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }
}
