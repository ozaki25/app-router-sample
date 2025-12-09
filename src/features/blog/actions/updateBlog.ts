'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { update } from '@/repositories/blog';
import { blogSchema } from '@/features/blog/validations/blogValidation';
import { ActionState } from '@/types/action';

export async function updateBlog(
  id: string,
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

    await update({ id, title, content });

    revalidatePath('/blogs');
    revalidatePath(`/blogs/${id}`);
  } catch (error) {
    console.error('Failed to update blog:', error);
    return {
      success: false,
      error: 'ブログの更新に失敗しました',
    };
  }

  redirect(`/blogs/${id}`);
}
