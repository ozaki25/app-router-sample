import { ArticleTitle } from '@/components/ArticleTitle';
import { BlogCard } from '@/components/BlogCard';
import { mockArticles } from '@/mock/articles';
import Link from 'next/link';

// サンプル：liked=trueの記事を「自分のいいね」として表示
const likedArticles = mockArticles.filter((a) => a.liked);

export default function LikesPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <ArticleTitle title="いいねした記事" size="lg" className="mb-8" />
      {likedArticles.length === 0 ? (
        <p className="text-gray-500">まだ「いいね」した記事はありません。</p>
      ) : (
        <div className="flex flex-col gap-6">
          {likedArticles.map((article) => (
            <Link key={article.id} href={`/article/${article.id}`} className="block">
              <BlogCard {...article} />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
