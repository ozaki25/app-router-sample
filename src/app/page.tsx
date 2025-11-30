import Link from 'next/link';
import { BlogCard } from '@/components/BlogCard';
import { mockArticles } from './mock/articles';
import { ArticleTitle } from '@/components/ArticleTitle';

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <ArticleTitle title="youScene ブログ一覧" size="lg" className="mb-8" />
      <div className="flex flex-col gap-6">
        {mockArticles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`} className="block">
            <BlogCard {...article} />
          </Link>
        ))}
      </div>
    </main>
  );
}
