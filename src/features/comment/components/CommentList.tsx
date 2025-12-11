import { Card, CardBody } from '@/components/ui/Card';
import { Pagination } from '@/components/ui/Pagination';
import { formatDate } from '@/libs/shared/date';
import type { Comment } from '@/types/comment';

function Empty() {
  return (
    <Card>
      <CardBody>
        <p className="text-gray-500 text-center py-4">コメントはまだありません</p>
      </CardBody>
    </Card>
  );
}

type Props = {
  comments: Comment[];
  currentPage: number;
  totalPages: number;
  isPending: boolean;
  onChangePage: (page: number) => void;
};

export function CommentList({ comments, currentPage, totalPages, isPending, onChangePage }: Props) {
  if (comments.length === 0) {
    return <Empty />;
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardBody>
              <p className="text-gray-800 whitespace-pre-wrap">{comment.content}</p>
              <p className="text-sm text-gray-500 mt-2">{formatDate(comment.createdAt)}</p>
            </CardBody>
          </Card>
        ))}
      </div>
      {totalPages > 1 && (
        <div className={isPending ? 'pointer-events-none opacity-50' : ''}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={onChangePage}
          />
        </div>
      )}
    </div>
  );
}
