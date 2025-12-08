'use client';

import { useTransition } from 'react';
import { Button } from '@/components/ui/Button';
import { deleteBlog } from '../actions/blogActions';

type DeleteButtonProps = {
  blogId: string;
};

export function DeleteButton({ blogId }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm('本当に削除しますか?')) {
      return;
    }

    startTransition(async () => {
      const result = await deleteBlog(blogId);
      if (result.error) {
        alert(result.error);
      }
    });
  };

  return (
    <Button type="button" variant="danger" onClick={handleDelete} disabled={isPending}>
      {isPending ? '削除中...' : '削除'}
    </Button>
  );
}
