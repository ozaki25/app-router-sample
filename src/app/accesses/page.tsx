import { ArticleTitle } from '@/components/ArticleTitle';
import { mockArticles } from '@/mock/articles';
// アクセス履歴のダミーデータ
const accessData = mockArticles.map((a) => ({
  blogId: a.id,
  blogTitle: a.title,
  accesses: [
    { date: '2025-11-30 10:00', user: { name: '山田太郎', section: '営業部' } },
    { date: '2025-11-30 11:30', user: { name: '佐藤花子', section: '開発部' } },
  ],
}));

export default function AccessListPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <ArticleTitle title="アクセスした人一覧" size="lg" className="mb-8" />
      {accessData.map((blog) => (
        <section key={blog.blogId} className="mb-8">
          <h4 className="mb-2 font-bold text-[color:var(--title)]">
            <a href={`/article/${blog.blogId}`} className="hover:underline">
              {blog.blogTitle}
            </a>
            <span className="ml-2 text-sm text-gray-500">にアクセスした人一覧</span>
          </h4>
          <div className="flex flex-col gap-2">
            {blog.accesses.map((access, i) => (
              <div key={i} className="flex items-center gap-4 border-b py-1 text-sm">
                <span className="w-40 text-gray-500">{access.date.replace(' ', '　')}</span>
                <span className="text-gray-800">
                  {access.user.name}（{access.user.section}）
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
