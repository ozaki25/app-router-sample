import { Header } from '@/components/layout/Header';
import { Card, CardBody } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/LinkButton';
import { DeleteButton } from '@/features/blog/components/DeleteButton';
import { formatDate } from '@/libs/shared/date';
import { getById } from '@/repositories/blog';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const blog = await getById(id);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />
      <Container maxWidth="3xl">
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
      </Container>
    </>
  );
}
