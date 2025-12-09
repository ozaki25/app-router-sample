'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { deleteBlog as deleteBlogRepo } from '@/repositories/blog';
import { ActionState } from '@/libs/shared/types';

export async function deleteBlog(id: string): Promise<ActionState> {
  try {
    await deleteBlogRepo(id);

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
