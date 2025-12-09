import { DeleteButton } from './DeleteButton';
import { Card, CardBody } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/LinkButton';
import { formatDate } from '@/libs/shared/date';
import { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
};

export function BlogDetail({ blog }: Props) {
  return (
    <Card>
      <CardBody>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
          <div>
            <span className="font-medium">作成:</span> {formatDate(blog.createdAt)}
          </div>
          <div>
            <span className="font-medium">更新:</span> {formatDate(blog.updatedAt)}
          </div>
        </div>
        <div className="prose max-w-none mb-8">
          <p className="whitespace-pre-wrap text-gray-700">{blog.content}</p>
        </div>
        <div className="flex gap-4 pt-6 border-t border-gray-200">
          <LinkButton href={`/blogs/${blog.id}/edit`} variant="primary">
            編集
          </LinkButton>
          <DeleteButton blogId={blog.id} />
          <LinkButton href="/blogs" variant="secondary">
            一覧に戻る
          </LinkButton>
        </div>
      </CardBody>
    </Card>
  );
}
