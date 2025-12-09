'use server';

import { blogSchema } from '@/features/blog/validations/blogValidation';
import { create } from '@/repositories/blog';
import { ActionState } from '@/types/action';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBlog(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const title = formData.get('title');
    const content = formData.get('content');

    const result = blogSchema.safeParse({ title, content });
    if (!result.success) {
      return {
        success: false,
        error: result.error.issues.map((issue) => issue.message).join(', '),
      };
    }

    await create(result.data);

    revalidatePath('/blogs');
  } catch (error) {
    console.error('Failed to create blog:', error);
    return {
      success: false,
      error: 'ブログの作成に失敗しました',
    };
  }

  redirect('/blogs');
}
