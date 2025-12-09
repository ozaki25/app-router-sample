import { Header } from '@/components/layout/Header';
import { Container } from '@/components/ui/Container';
import { BlogDetail } from '@/features/blog/components/BlogDetail';
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
        <BlogDetail blog={blog} />
      </Container>
    </>
  );
}
