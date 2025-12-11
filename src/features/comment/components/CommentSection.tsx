import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import type { PaginatedComments } from '@/types/comment';

type Props = {
  blogId: string;
  comments: PaginatedComments;
};

export function CommentSection({ blogId, comments }: Props) {
  return (
    <section className="mt-12 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">コメント</h2>
      <CommentList
        blogId={blogId}
        initialComments={comments.comments}
        initialCurrentPage={comments.currentPage}
        initialTotalPages={comments.totalPages}
      />
      <CommentForm blogId={blogId} />
    </section>
  );
}
