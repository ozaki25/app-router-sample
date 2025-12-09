'use client';

import { BlogForm } from './BlogForm';
import { createBlogAction } from '@/features/blog/actions/createBlog';
import { useActionState, useEffect } from 'react';

const initialState = {
  success: false,
  error: undefined,
};

export function CreateBlogForm() {
  const [state, formAction, isPending] = useActionState(createBlogAction, initialState);

  useEffect(() => {
    if (state?.error) {
      alert(state.error);
    }
  }, [state]);

  return <BlogForm formAction={formAction} submitLabel="投稿" isPending={isPending} />;
}
