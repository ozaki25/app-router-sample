'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { deleteBlog } from '@/repositories/blogs/delete';
import { ActionState } from '@/types/action';

export async function deleteBlogAction(id: string): Promise<ActionState> {
  try {
    await deleteBlog(id);

    revalidatePath('/blogs');
  } catch (error) {
    console.error('Failed to delete blog:', error);
    return {
      success: false,
      error: 'ブログの削除に失敗しました',
    };
  }

  redirect('/blogs');
}
