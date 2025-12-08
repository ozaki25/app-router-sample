import { Blog } from './types';

export const INITIAL_BLOGS: Blog[] = [
  {
    id: '1',
    title: 'はじめてのブログ投稿',
    content: 'これは最初のブログ投稿です。Next.js App Routerを使った実装になっています。',
    createdAt: new Date('2025-12-01T10:00:00').toISOString(),
    updatedAt: new Date('2025-12-01T10:00:00').toISOString(),
  },
  {
    id: '2',
    title: 'Tailwind CSSでBootstrap風UI',
    content:
      'このブログアプリはTailwind CSSを使ってBootstrap風のUIを実装しています。シンプルで使いやすいデザインを目指しました。',
    createdAt: new Date('2025-12-05T14:30:00').toISOString(),
    updatedAt: new Date('2025-12-05T14:30:00').toISOString(),
  },
  {
    id: '3',
    title: 'レイヤー分けの設計',
    content:
      'このアプリケーションはレイヤー分けを意識した設計になっています。Repository層、Action層、Component層を分離することで保守性を高めています。',
    createdAt: new Date('2025-12-07T09:15:00').toISOString(),
    updatedAt: new Date('2025-12-07T09:15:00').toISOString(),
  },
];
