import { z } from 'zod';

export const requestSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type Request = z.infer<typeof requestSchema>;

export const toApiRequest = (input: Request): Request => input;
