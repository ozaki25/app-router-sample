import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { BlogList } from '@/features/blog/components/BlogList';
import { getAllBlogRepository } from '@/repositories/blog/getAll';

export default async function BlogsPage() {
  const blogs = await getAllBlogRepository();

  return (
    <>
      <Container>
        <PageHeader title="ブログ一覧" description="投稿されたブログ記事の一覧です" />
        <BlogList blogs={blogs} />
      </Container>
    </>
  );
}
