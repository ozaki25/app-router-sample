import type { Comment, PaginatedComments } from '@/types/comment';
import { z } from 'zod';

const commentResponseSchema = z.object({
  id: z.string(),
  blog_id: z.string(),
  content: z.string(),
  created_at: z.string(),
});

export type CommentResponse = z.infer<typeof commentResponseSchema>;

export const responseSchema = z.object({
  total: z.number(),
  total_pages: z.number(),
  current_page: z.number(),
  data: z.array(commentResponseSchema),
});

export type PaginatedCommentsResponse = z.infer<typeof responseSchema>;

export const toComment = (data: z.infer<typeof commentResponseSchema>): Comment => ({
  id: data.id,
  blogId: data.blog_id,
  content: data.content,
  createdAt: data.created_at,
});

export const toPaginatedComments = (data: PaginatedCommentsResponse): PaginatedComments => ({
  total: data.total,
  totalPages: data.total_pages,
  currentPage: data.current_page,
  comments: data.data.map(toComment),
});
