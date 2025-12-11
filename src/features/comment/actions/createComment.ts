'use server';

import { commentSchema } from '@/features/comment/validations/commentValidation';
import { createCommentRepository } from '@/repositories/comment/create';
import { ActionState } from '@/types/action';
import { revalidatePath } from 'next/cache';

export async function createCommentAction(
  blogId: string,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const content = formData.get('content');

    const result = commentSchema.safeParse({ content });
    if (!result.success) {
      return {
        success: false,
        error: result.error.issues.map(({ message }) => message).join(', '),
      };
    }

    await createCommentRepository({ blogId, content: result.data.content });

    revalidatePath(`/blogs/${blogId}`);

    return {
      success: true,
      error: undefined,
    };
  } catch (error) {
    console.error('Failed to create comment:', error);
    return {
      success: false,
      error: 'コメントの投稿に失敗しました',
    };
  }
}
