import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { BlogDetail } from '@/features/blog/components/BlogDetail';
import { CommentSection } from '@/features/comment/components/CommentSection';
import { getBlogComments } from '@/repositories/blogs-comments/list';
import { getBlog } from '@/repositories/blogs/detail';
import { Blog } from '@/types/blog';
import { PaginatedComments } from '@/types/comment';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  const paginatedComments = await getBlogComments(id);

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
