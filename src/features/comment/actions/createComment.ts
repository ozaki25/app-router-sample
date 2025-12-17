'use server';

import { commentSchema } from '@/features/comment/validations/commentValidation';
import { createBlogComment } from '@/repositories/blogs-comments/create';
import { ActionState } from '@/types/action';

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

    await createBlogComment({ blogId, content: result.data.content });

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
