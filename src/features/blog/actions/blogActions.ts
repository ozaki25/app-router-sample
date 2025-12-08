'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { blogRepository } from '@/repositories/blogRepository';
import { blogSchema } from '@/features/blog/validations/blogValidation';

export type ActionState = {
  success: boolean;
  error?: string;
};

export async function createBlog(prevState: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    // バリデーション
    const result = blogSchema.safeParse({ title, content });
    if (!result.success) {
      return {
        success: false,
        error: result.error.issues[0].message,
      };
    }

    // ブログ作成
    await blogRepository.create({ title, content });

    // キャッシュを無効化
    revalidatePath('/blogs');
  } catch (error) {
    console.error('Failed to create blog:', error);
    return {
      success: false,
      error: 'ブログの作成に失敗しました',
    };
  }

  // リダイレクトはtry-catchの外で実行
  redirect('/blogs');
}

export async function updateBlog(
  id: string,
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    // バリデーション
    const result = blogSchema.safeParse({ title, content });
    if (!result.success) {
      return {
        success: false,
        error: result.error.issues[0].message,
      };
    }

    // ブログ更新
    await blogRepository.update({ id, title, content });

    // キャッシュを無効化
    revalidatePath('/blogs');
    revalidatePath(`/blogs/${id}`);
  } catch (error) {
    console.error('Failed to update blog:', error);
    return {
      success: false,
      error: 'ブログの更新に失敗しました',
    };
  }

  // リダイレクトはtry-catchの外で実行
  redirect(`/blogs/${id}`);
}

export async function deleteBlog(id: string): Promise<ActionState> {
  try {
    // 削除確認はクライアント側で実施済み
    await blogRepository.delete(id);

    // キャッシュを無効化
    revalidatePath('/blogs');
  } catch (error) {
    console.error('Failed to delete blog:', error);
    return {
      success: false,
      error: 'ブログの削除に失敗しました',
    };
  }

  // リダイレクトはtry-catchの外で実行
  redirect('/blogs');
}
