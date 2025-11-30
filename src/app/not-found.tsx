import Link from 'next/link';
import { ArticleTitle } from '@/components/ArticleTitle';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <ArticleTitle title="404 Not Found" size="lg" className="mb-4" />
      <p className="mb-8 text-gray-500">お探しのページは見つかりませんでした。</p>
      <Link href="/" className="font-semibold text-[color:var(--link)] hover:underline">
        トップページへ戻る
      </Link>
    </main>
  );
}
