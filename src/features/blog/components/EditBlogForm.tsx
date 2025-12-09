'use client';

import { BlogForm } from './BlogForm';
import { updateBlogAction } from '@/features/blog/actions/updateBlog';
import { Blog } from '@/types/blog';
import { useActionState, useEffect } from 'react';

type Props = {
  blog: Blog;
};

const initialState = {
  success: false,
  error: undefined,
};

export function EditBlogForm({ blog }: Props) {
  const action = updateBlogAction.bind(null, blog.id);
  const [state, formAction, isPending] = useActionState(action, initialState);

  useEffect(() => {
    if (state?.error) {
      alert(state.error);
    }
  }, [state]);

  return (
    <BlogForm
      formAction={formAction}
      defaultTitle={blog.title}
      defaultContent={blog.content}
      submitLabel="更新"
      isPending={isPending}
    />
  );
}
