import { API_BASE_URL } from '@/constants/api';
import { toApiRequest } from './requestSchema';

export type CreateCommentInput = {
  blogId: string;
  content: string;
};

export async function createBlogComment(input: CreateCommentInput): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/blogs/${input.blogId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(toApiRequest(input)),
  });

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }
}
