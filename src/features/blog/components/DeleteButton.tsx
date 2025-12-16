'use client';

import { useTransition } from 'react';
import { Button } from '@/components/ui/Button';
import { deleteBlogAction } from '@/features/blog/actions/deleteBlog';

type Props = {
  blogId: string;
};

export function DeleteButton({ blogId }: Props) {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    if (!confirm('本当に削除しますか?')) {
      return;
    }

    startTransition(async () => {
      const result = await deleteBlogAction(blogId);
      if (result.error) {
        alert(result.error);
      }
    });
  };

  return (
    <Button type="button" variant="danger" onClick={onClick} disabled={isPending}>
      {isPending ? '削除中...' : '削除'}
    </Button>
  );
}
