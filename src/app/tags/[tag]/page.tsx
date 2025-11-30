import { ArticleTitle } from '@/components/ArticleTitle';
import { BlogCard } from '@/components/BlogCard';
import { mockArticles } from '@/mock/articles';
import Link from 'next/link';

export default function TagDetailPage({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag);
  const articles = mockArticles.filter((a) => a.tags?.includes(tag));

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <ArticleTitle title={`#${tag} の記事`} size="lg" className="mb-8" />
      {articles.length === 0 ? (
        <p className="text-gray-500">このタグの記事はありません。</p>
      ) : (
        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/${article.id}`} className="block">
              <BlogCard {...article} />
            </Link>
          ))}
        </div>
      )}
      <div className="mt-8">
        <Link href="/tags" className="text-[color:var(--link)] hover:underline">
          ← タグ一覧へ戻る
        </Link>
      </div>
    </main>
  );
}
