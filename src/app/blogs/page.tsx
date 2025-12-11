import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { Pagination } from '@/components/ui/Pagination';
import { PaginationInfo } from '@/components/ui/PaginationInfo';
import { BlogList } from '@/features/blog/components/BlogList';
import { getAllBlogRepository } from '@/repositories/blog/getAll';
import { notFound } from 'next/navigation';

export default async function BlogsPage({ searchParams }: PageProps<'/blogs'>) {
  const params = await searchParams;
  const pageParam = params.page;
  const page = pageParam ? Number(pageParam) : 1;

  // ページ番号が不正な場合は404
  if (isNaN(page) || page < 1) {
    notFound();
  }

  const { blogs, total, totalPages, currentPage } = await getAllBlogRepository(page).catch(() => {
    notFound();
  });

  return (
    <Container>
      <PageHeader title="ブログ一覧" description="投稿されたブログ記事の一覧です" />
      <div className="mb-4">
        <PaginationInfo currentPage={currentPage} total={total} />
      </div>
      <BlogList blogs={blogs} />
      <div className="mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </Container>
  );
}
