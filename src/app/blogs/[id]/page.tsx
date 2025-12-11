import { Container } from '@/components/ui/Container';
import { BlogDetail } from '@/features/blog/components/BlogDetail';
import { CommentSection } from '@/features/comment/components/CommentSection';
import { getByIdBlogRepository } from '@/repositories/blog/getById';
import { getCommentsByBlogIdRepository } from '@/repositories/comment/getByBlogId';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const blog = await getByIdBlogRepository(id);

  if (!blog) {
    notFound();
  }

  const comments = await getCommentsByBlogIdRepository(id);

  return (
    <Container maxWidth="3xl">
      <BlogDetail blog={blog} />
      <CommentSection blogId={id} comments={comments} />
    </Container>
  );
}
