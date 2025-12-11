import { responseSchema, toComment } from './responseSchema';
import { API_BASE_URL } from '@/constants/api';
import { Comment } from '@/types/comment';

export async function getCommentsByBlogIdRepository(blogId: string): Promise<Comment[]> {
  const response = await fetch(`${API_BASE_URL}/api/blogs/${blogId}/comments`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }

  const data = await response.json();
  const validated = responseSchema.parse(data);
  return validated.map(toComment);
}
