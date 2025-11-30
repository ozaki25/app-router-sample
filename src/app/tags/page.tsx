import { ArticleTitle } from '@/components/ArticleTitle';
import { Tag } from '@/components/Tag';
import { mockArticles } from '@/mock/articles';
import Link from 'next/link';

// 全記事からユニークなタグ一覧を抽出
const allTags = Array.from(new Set(mockArticles.flatMap((a) => a.tags ?? [])));

export default function TagsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <ArticleTitle title="タグ一覧" size="lg" className="mb-8" />
      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
            <Tag label={tag} className="cursor-pointer transition hover:opacity-80" />
          </Link>
        ))}
      </div>
    </main>
  );
}
