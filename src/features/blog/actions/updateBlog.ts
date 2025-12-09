'use server';

import { blogSchema } from '@/features/blog/validations/blogValidation';
import { update } from '@/repositories/blog';
import { ActionState } from '@/types/action';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateBlog(
  id: string,
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
        error: result.error.issues.map(({ message }) => message).join(', '),
      };
    }

    await update({ id, ...result.data });

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
