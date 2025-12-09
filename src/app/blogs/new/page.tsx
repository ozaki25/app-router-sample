import { Header } from '@/components/layout/Header';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { CreateBlogForm } from '@/features/blog/components/CreateBlogForm';

export default function NewBlogPage() {
  return (
    <>
      <Header />
      <Container maxWidth="2xl">
        <PageHeader title="新規投稿" description="新しいブログ記事を投稿します" />
        <CreateBlogForm />
      </Container>
    </>
  );
}
