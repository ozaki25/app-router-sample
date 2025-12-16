import { z } from 'zod';
import { Blog } from '@/types/blog';

export const responseSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Response = z.infer<typeof responseSchema>;

export const toBlog = (data: Response): Blog => ({
  id: data.id,
  title: data.title,
  content: data.content,
  createdAt: data.created_at,
  updatedAt: data.updated_at,
});
