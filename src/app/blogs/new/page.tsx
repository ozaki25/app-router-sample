import { Header } from '@/components/layout/Header';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { createBlog } from '@/features/blog/actions';
import { BlogForm } from '@/features/blog/components/BlogForm';

export default function NewBlogPage() {
  return (
    <>
      <Header />
      <Container maxWidth="2xl">
        <PageHeader title="新規投稿" description="新しいブログ記事を投稿します" />
        <BlogForm action={createBlog} submitLabel="投稿" />
      </Container>
    </>
  );
}
