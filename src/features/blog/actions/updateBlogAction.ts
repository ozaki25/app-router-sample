'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { blogSchema } from '@/features/blog/validations/blogValidation';
import { updateBlog } from '@/repositories/blogs/update';
import { ActionState } from '@/types/action';

export async function updateBlogAction(
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

    await updateBlog({ id, ...result.data });

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
