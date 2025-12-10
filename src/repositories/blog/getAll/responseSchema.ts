import { Blog, PaginatedBlogs } from '@/types/blog';
import { z } from 'zod';

const blogResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const responseSchema = z.object({
  total: z.number(),
  total_pages: z.number(),
  current_page: z.number(),
  data: z.array(blogResponseSchema),
});

export type Response = z.infer<typeof responseSchema>;

export const toBlog = (data: z.infer<typeof blogResponseSchema>): Blog => ({
  id: data.id,
  title: data.title,
  content: data.content,
  createdAt: data.created_at,
  updatedAt: data.updated_at,
});

export const toPaginatedBlogs = (data: Response): PaginatedBlogs => ({
  total: data.total,
  totalPages: data.total_pages,
  currentPage: data.current_page,
  blogs: data.data.map(toBlog),
});
