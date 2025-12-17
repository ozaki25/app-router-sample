import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { EditBlogForm } from '@/features/blog/components/EditBlogForm';
import { getBlog } from '@/repositories/blogs/detail';
import { Blog } from '@/types/blog';

type EditBlogPageComponentProps = {
  blog: Blog;
};

export function EditBlogPageComponent({ blog }: EditBlogPageComponentProps) {
  return (
    <Container maxWidth="2xl">
      <PageHeader title="ブログ編集" description="ブログ記事の内容を編集します" />
      <EditBlogForm blog={blog} />
    </Container>
  );
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  return <EditBlogPageComponent blog={blog} />;
}
