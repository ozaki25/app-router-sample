// youScene風サンプル記事データ
import { BlogCardProps } from '@/components/BlogCard';

export const mockArticles: BlogCardProps[] = [
  {
    id: '1',
    title: 'Next.jsでyouSceneを再実装する方法',
    thumbnail: '/globe.svg',
    tags: ['技術', 'Next.js', 'React'],
    author: {
      name: 'おざき',
      avatar: '/file.svg',
    },
    date: '2025-11-30T12:34:56Z',
    liked: true,
    likeCount: 12,
    excerpt: 'Next.js App RouterとTailwind v4でyouSceneを再現する手順を解説します。',
  },
  {
    id: '2',
    title: 'youSceneのカラーパレット設計思想',
    thumbnail: '/vercel.svg',
    tags: ['デザイン', 'カラー'],
    author: {
      name: 'みどり',
      avatar: '/window.svg',
    },
    date: '2025-11-28T09:00:00Z',
    liked: false,
    likeCount: 5,
    excerpt: 'youSceneの色設計とCSS変数活用のポイントを紹介。',
  },
  {
    id: '3',
    title: 'Storybook v10でUIを爆速開発',
    thumbnail: '/next.svg',
    tags: ['テスト', 'Storybook'],
    author: {
      name: 'テスト太郎',
      avatar: '/globe.svg',
    },
    date: '2025-11-25T18:00:00Z',
    liked: false,
    likeCount: 8,
    excerpt: 'Storybook v10とcomposeStoriesでUIテストを自動化！',
  },
];
