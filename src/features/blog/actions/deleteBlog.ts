'use server';

import { deleteBlogRepository } from '@/repositories/blog/delete';
import { ActionState } from '@/types/action';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteBlogAction(id: string): Promise<ActionState> {
  try {
    await deleteBlogRepository(id);

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
