import { Header } from '@/components/layout/Header';
import { BlogForm } from '@/features/blog/components/BlogForm';
import { createBlog } from '@/features/blog/actions/blogActions';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';

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
