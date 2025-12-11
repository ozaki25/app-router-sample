import { z } from 'zod';

export const commentSchema = z.object({
  content: z
    .string()
    .min(1, 'コメントは必須です')
    .max(1000, 'コメントは1000文字以内で入力してください'),
});

export type CommentFormData = z.infer<typeof commentSchema>;
