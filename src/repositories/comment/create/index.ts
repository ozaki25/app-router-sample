import { requestSchema, toApiRequest } from './requestSchema';
import { API_BASE_URL } from '@/constants/api';

type CreateCommentInput = {
  blogId: string;
  content: string;
};

export async function createCommentRepository(input: CreateCommentInput): Promise<void> {
  const validatedInput = requestSchema.parse(input);
  const requestBody = toApiRequest(validatedInput);

  const response = await fetch(`${API_BASE_URL}/blogs/${input.blogId}/comments`, {
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
