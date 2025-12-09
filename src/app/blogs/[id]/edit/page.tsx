import { notFound } from 'next/navigation';
import { getById } from '@/repositories/blog';
import { Header } from '@/components/layout/Header';
import { BlogForm } from '@/features/blog/components/BlogForm';
import { updateBlog } from '@/features/blog/actions';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditBlogPage({ params }: PageProps) {
  const { id } = await params;
  const blog = await getById(id);

  if (!blog) {
    notFound();
  }

  // updateBlogをcurryingして現在のidを束縛
  const updateBlogWithId = updateBlog.bind(null, id);

  return (
    <>
      <Header />
      <Container maxWidth="2xl">
        <PageHeader title="ブログ編集" description="ブログ記事の内容を編集します" />
        <BlogForm action={updateBlogWithId} blog={blog} submitLabel="更新" />
      </Container>
    </>
  );
}
