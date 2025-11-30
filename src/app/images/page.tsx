import { ArticleTitle } from '@/components/ArticleTitle';
import { ThumbnailImage } from '@/components/ThumbnailImage';
import { mockArticles } from '@/mock/articles';

// 全記事のサムネイル画像を抽出
const allImages = mockArticles.map((a) => ({
  src: a.thumbnail,
  alt: a.title,
  id: a.id,
}));

export default function ImagesPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <ArticleTitle title="画像一覧" size="lg" className="mb-8" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {allImages.map((img) => (
          <ThumbnailImage key={img.id} src={img.src} alt={img.alt} size="md" />
        ))}
      </div>
    </main>
  );
}
