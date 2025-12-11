import { Container } from '@/components/ui/Container';
import { BlogDetail } from '@/features/blog/components/BlogDetail';
import { CommentSection } from '@/features/comment/components/CommentSection';
import { getByIdBlogRepository } from '@/repositories/blog/getById';
import { getCommentsByBlogIdRepository } from '@/repositories/comment/getByBlogId';
import { Blog } from '@/types/blog';
import { PaginatedComments } from '@/types/comment';
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

  const paginatedComments = await getCommentsByBlogIdRepository(id);

  return <BlogDetailPageComponent id={id} blog={blog} paginatedComments={paginatedComments} />;
}

type BlogDetailPageComponentProps = {
  id: string;
  blog: Blog;
  paginatedComments: PaginatedComments;
};

export function BlogDetailPageComponent({
  id,
  blog,
  paginatedComments,
}: BlogDetailPageComponentProps) {
  return (
    <Container maxWidth="3xl">
      <BlogDetail blog={blog} />
      <CommentSection blogId={id} initialPaginatedComments={paginatedComments} />
    </Container>
  );
}
