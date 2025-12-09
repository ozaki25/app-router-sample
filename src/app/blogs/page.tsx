import { Header } from '@/components/layout/Header';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { BlogList } from '@/features/blog/components/BlogList';
import { getAll } from '@/repositories/blog';

export default async function BlogsPage() {
  const blogs = await getAll();

  return (
    <>
      <Header />
      <Container>
        <PageHeader title="ブログ一覧" description="投稿されたブログ記事の一覧です" />
        <BlogList blogs={blogs} />
      </Container>
    </>
  );
}
