import { Button } from '@/components/ui/Button';
import { Card, CardBody } from '@/components/ui/Card';
import { Textarea } from '@/components/ui/Textarea';
import { createCommentAction } from '@/features/comment/actions/createComment';
import { useActionState, useEffect, useEffectEvent } from 'react';

const initialState = {
  success: false,
  error: undefined,
};

type Props = {
  blogId: string;
  onPosted: () => void;
};

export function CommentForm({ blogId, onPosted }: Props) {
  const [state, formAction, isPending] = useActionState(
    createCommentAction.bind(null, blogId),
    initialState
  );

  const onSuccess = useEffectEvent(() => {
    onPosted();
  });

  useEffect(() => {
    if (state?.error) {
      alert(state.error);
    }
    if (state?.success) {
      onSuccess();
    }
  }, [state]);

  return (
    <Card>
      <CardBody>
        <form action={formAction} className="space-y-4">
          <Textarea
            name="content"
            label="コメント"
            placeholder="コメントを入力"
            rows={4}
            required
          />
          <Button type="submit" variant="primary" disabled={isPending}>
            {isPending ? '投稿中...' : 'コメントを投稿'}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
