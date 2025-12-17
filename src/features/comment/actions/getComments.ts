'use server';

import { getBlogComments } from '@/repositories/blogs-comments/list';
import type { ActionResponse } from '@/types/action';
import type { PaginatedComments } from '@/types/comment';

export async function getComments(
  blogId: string,
  page: number
): Promise<ActionResponse<PaginatedComments>> {
  try {
    const data = await getBlogComments(blogId, page);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to get comments:', error);
    return {
      success: false,
      error: 'コメントの取得に失敗しました',
    };
  }
}
