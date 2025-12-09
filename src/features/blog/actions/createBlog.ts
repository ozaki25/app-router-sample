'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { create } from '@/repositories/blog';
import { blogSchema } from '@/features/blog/validations/blogValidation';
import { ActionState } from '@/libs/shared/types';

export async function createBlog(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    const result = blogSchema.safeParse({ title, content });
    if (!result.success) {
      return {
        success: false,
        error: result.error.issues.map((issue) => issue.message).join(', '),
      };
    }

    await create({ title, content });

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
