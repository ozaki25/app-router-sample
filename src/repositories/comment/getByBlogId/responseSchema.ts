import type { Comment } from '@/types/comment';
import { z } from 'zod';

const commentResponseSchema = z.object({
  id: z.string(),
  blog_id: z.string(),
  content: z.string(),
  created_at: z.string(),
});

export const responseSchema = z.array(commentResponseSchema);

export type Response = z.infer<typeof commentResponseSchema>;

export const toComment = (data: Response): Comment => ({
  id: data.id,
  blogId: data.blog_id,
  content: data.content,
  createdAt: data.created_at,
});
