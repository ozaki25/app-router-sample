import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import type { Comment } from '@/types/comment';

type Props = {
  blogId: string;
  comments: Comment[];
};

export function CommentSection({ blogId, comments }: Props) {
  return (
    <section className="mt-12 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">コメント</h2>
      <CommentList comments={comments} />
      <CommentForm blogId={blogId} />
    </section>
  );
}
