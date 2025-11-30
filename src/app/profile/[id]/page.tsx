import { ArticleTitle } from '@/components/ArticleTitle';
import { Avatar } from '@/components/Avatar';
import { BlogCard } from '@/components/BlogCard';
import { mockArticles } from '@/mock/articles';

export default function ProfilePage({ params }: { params: { id: string } }) {
  // サンプル: idがauthor名と一致する記事を抽出
  const userArticles = mockArticles.filter((a) => a.author.name === params.id);
  const user = userArticles[0]?.author ?? { name: params.id, avatar: '/file.svg' };

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <div className="mb-6 flex items-center gap-4">
        <Avatar src={user.avatar} alt={user.name} size="lg" />
        <div>
          <ArticleTitle title={user.name} size="md" />
          <div className="text-sm text-gray-500">ユーザープロフィール</div>
        </div>
      </div>
      <ArticleTitle title="投稿記事" size="sm" className="mb-4" />
      {userArticles.length === 0 ? (
        <p className="text-gray-500">このユーザーの投稿はありません。</p>
      ) : (
        <div className="flex flex-col gap-6">
          {userArticles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
      )}
    </main>
  );
}
