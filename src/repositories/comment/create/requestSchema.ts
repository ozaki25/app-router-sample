import { z } from 'zod';

export const requestSchema = z.object({
  blogId: z.string(),
  content: z.string(),
});

export type Request = z.infer<typeof requestSchema>;

export const toApiRequest = (input: Request) => ({
  blog_id: input.blogId,
  content: input.content,
});
