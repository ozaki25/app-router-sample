'use client';
import { useState } from 'react';
import { ArticleTitle } from '@/components/ArticleTitle';
import { ThumbnailImage } from '@/components/ThumbnailImage';

export default function ImageUploadPage() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('画像URLを入力してください');
      return;
    }
    setError('');
    setUploaded(true);
  };

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <ArticleTitle title="画像アップロード" size="lg" className="mb-8" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="mb-1 block font-semibold">画像URL</label>
          <input
            className="w-full rounded border bg-[color:var(--container)] px-3 py-2 text-base"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
          />
        </div>
        {url && (
          <div className="mt-2">
            <ThumbnailImage src={url} alt="アップロードプレビュー" size="md" />
          </div>
        )}
        {error && <div className="font-semibold text-red-500">{error}</div>}
        <button
          type="submit"
          className="rounded bg-[color:var(--btn-bg)] px-6 py-2 text-lg font-bold text-[color:var(--btn-fg)] transition hover:bg-[color:var(--btn-hover)]"
        >
          アップロード
        </button>
      </form>
      {uploaded && (
        <div className="mt-6 font-semibold text-green-600">アップロード完了！（ダミー）</div>
      )}
    </main>
  );
}
