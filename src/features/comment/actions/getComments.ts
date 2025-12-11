'use server';

import { getCommentsByBlogIdRepository } from '@/repositories/comment/getByBlogId';
import type { ActionResponse } from '@/types/action';
import type { PaginatedComments } from '@/types/comment';

export async function getComments(
  blogId: string,
  page: number
): Promise<ActionResponse<PaginatedComments>> {
  try {
    const data = await getCommentsByBlogIdRepository(blogId, page);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'コメントの取得に失敗しました',
    };
  }
}
