'use client';
import { useState } from 'react';
import { ArticleTitle } from '@/components/ArticleTitle';
import { Tag } from '@/components/Tag';
import { ThumbnailImage } from '@/components/ThumbnailImage';
import { mockArticles } from '@/mock/articles';

export default function EditPostPage({ params }: { params: { id: string } }) {
  const article = mockArticles.find((a) => a.id === params.id);
  const [title, setTitle] = useState(article?.title ?? '');
  const [body, setBody] = useState(article?.excerpt ?? '');
  const [tags, setTags] = useState<string[]>(article?.tags ?? []);
  const [tagInput, setTagInput] = useState('');
  const [thumbnail, setThumbnail] = useState(article?.thumbnail ?? '');
  const [error, setError] = useState('');

  if (!article) {
    return (
      <main className="mx-auto max-w-xl px-4 py-10">
        <ArticleTitle title="記事が見つかりません" size="lg" className="mb-8" />
      </main>
    );
  }

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError('タイトルと本文は必須です');
      return;
    }
    setError('');
    // ここでAPI送信や状態更新を行う（現状はダミー）
    alert('編集が完了しました（ダミー）');
  };

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <ArticleTitle title="記事編集" size="lg" className="mb-8" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="mb-1 block font-semibold">タイトル</label>
          <input
            className="w-full rounded border bg-[color:var(--container)] px-3 py-2 text-base"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-1 block font-semibold">本文</label>
          <textarea
            className="min-h-[120px] w-full rounded border bg-[color:var(--container)] px-3 py-2 text-base"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-1 block font-semibold">タグ</label>
          <div className="mb-2 flex gap-2">
            <input
              className="rounded border px-2 py-1 text-sm"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              placeholder="タグを入力してEnter"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="rounded bg-[color:var(--btn-bg)] px-3 py-1 text-sm font-semibold text-[color:var(--btn-fg)]"
            >
              追加
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1">
                <Tag label={tag} />
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-xs text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-1 block font-semibold">サムネイル画像URL</label>
          <input
            className="w-full rounded border bg-[color:var(--container)] px-3 py-2 text-base"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder="https://..."
          />
          {thumbnail && (
            <div className="mt-2">
              <ThumbnailImage src={thumbnail} alt="サムネイルプレビュー" size="md" />
            </div>
          )}
        </div>
        {error && <div className="font-semibold text-red-500">{error}</div>}
        <button
          type="submit"
          className="rounded bg-[color:var(--btn-bg)] px-6 py-2 text-lg font-bold text-[color:var(--btn-fg)] transition hover:bg-[color:var(--btn-hover)]"
        >
          保存
        </button>
      </form>
    </main>
  );
}
