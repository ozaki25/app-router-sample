import { Container } from '@/components/ui/Container';
import { BlogDetail } from '@/features/blog/components/BlogDetail';
import { getByIdBlogRepository } from '@/repositories/blog/getById';
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

  return (
    <Container maxWidth="3xl">
      <BlogDetail blog={blog} />
    </Container>
  );
}
