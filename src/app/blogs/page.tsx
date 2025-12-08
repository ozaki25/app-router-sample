import { blogRepository } from '@/repositories/blogRepository';
import { BlogList } from '@/features/blog/components/BlogList';
import { Header } from '@/components/layout/Header';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';

export default async function BlogsPage() {
  const blogs = await blogRepository.getAll();

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
