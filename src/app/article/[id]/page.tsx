import { notFound } from 'next/navigation';
import { mockArticles } from '@/mock/articles';
import { ArticleTitle } from '@/components/ArticleTitle';
import { DateLabel } from '@/components/DateLabel';
import { Tag } from '@/components/Tag';
import { Avatar } from '@/components/Avatar';
import { LikeButton } from '@/components/LikeButton';
import { CommentBox } from '@/components/CommentBox';

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const article = mockArticles.find((a) => a.id === params.id);
  if (!article) return notFound();

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <ArticleTitle title={article.title} size="lg" className="mb-2" />
      <div className="mb-4 flex items-center gap-3">
        <Avatar src={article.author.avatar} alt={article.author.name} size="sm" />
        <span className="text-sm text-gray-700">{article.author.name}</span>
        <DateLabel date={article.date} className="ml-2" />
      </div>
      <img
        src={article.thumbnail}
        alt="thumbnail"
        className="mb-4 h-56 w-full rounded-lg border border-[color:var(--btn-bg)] bg-[color:var(--tag-bg)] object-cover"
      />
      <div className="mb-4 flex flex-wrap gap-2">
        {article.tags?.map((tag: string) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <p className="mb-6 text-base leading-relaxed text-[color:var(--foreground)]">
        {article.excerpt}
      </p>
      <div className="mb-8 flex items-center gap-4">
        <LikeButton liked={article.liked ?? false} count={article.likeCount} />
      </div>
      <section className="mt-8">
        <h3 className="text-md mb-2 font-bold text-[color:var(--title)]">コメント</h3>
        <CommentBox />
      </section>
    </main>
  );
}
