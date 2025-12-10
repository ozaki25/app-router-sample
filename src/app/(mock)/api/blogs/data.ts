import { Blog } from '@/types/blog';

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
  {
    id: '4',
    title: 'TypeScriptの型安全性',
    content:
      'TypeScriptの厳格な型チェックにより、バグを未然に防ぐことができます。zodを使ったスキーマバリデーションも活用しています。',
    createdAt: new Date('2025-12-08T11:20:00').toISOString(),
    updatedAt: new Date('2025-12-08T11:20:00').toISOString(),
  },
  {
    id: '5',
    title: 'Server ActionsとForm',
    content:
      'Next.js 14のServer Actionsを使うことで、クライアントサイドのJavaScriptを減らしつつ、フォーム送信を実装できます。',
    createdAt: new Date('2025-12-09T08:45:00').toISOString(),
    updatedAt: new Date('2025-12-09T08:45:00').toISOString(),
  },
  {
    id: '6',
    title: 'Storybookでコンポーネント開発',
    content:
      'Storybookを使ってUIコンポーネントを独立して開発・テストできます。デザインシステムの構築にも役立ちます。',
    createdAt: new Date('2025-12-09T15:30:00').toISOString(),
    updatedAt: new Date('2025-12-09T15:30:00').toISOString(),
  },
  {
    id: '7',
    title: 'Mock APIの実装',
    content:
      'Next.js Route HandlersでMock APIを実装しています。バックエンドの開発を待たずにフロントエンド開発を進められます。',
    createdAt: new Date('2025-12-10T10:00:00').toISOString(),
    updatedAt: new Date('2025-12-10T10:00:00').toISOString(),
  },
  {
    id: '8',
    title: 'レスポンシブデザイン',
    content:
      'Tailwind CSSのユーティリティクラスを使って、モバイルからデスクトップまで対応したレスポンシブデザインを実現しています。',
    createdAt: new Date('2025-12-10T14:15:00').toISOString(),
    updatedAt: new Date('2025-12-10T14:15:00').toISOString(),
  },
  {
    id: '9',
    title: 'アクセシビリティへの配慮',
    content:
      'ARIA属性やセマンティックHTMLを使って、スクリーンリーダーやキーボード操作にも対応したアクセシブルなUIを目指しています。',
    createdAt: new Date('2025-12-11T09:00:00').toISOString(),
    updatedAt: new Date('2025-12-11T09:00:00').toISOString(),
  },
  {
    id: '10',
    title: 'ページネーション機能',
    content:
      '大量のデータを扱う際に必須のページネーション機能を実装しました。ユーザビリティとパフォーマンスを両立させています。',
    createdAt: new Date('2025-12-11T13:30:00').toISOString(),
    updatedAt: new Date('2025-12-11T13:30:00').toISOString(),
  },
  {
    id: '11',
    title: 'ブログ投稿11',
    content: 'これは11番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T10:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T10:00:00').toISOString(),
  },
  {
    id: '12',
    title: 'ブログ投稿12',
    content: 'これは12番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T11:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T11:00:00').toISOString(),
  },
  {
    id: '13',
    title: 'ブログ投稿13',
    content: 'これは13番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T12:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T12:00:00').toISOString(),
  },
  {
    id: '14',
    title: 'ブログ投稿14',
    content: 'これは14番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T13:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T13:00:00').toISOString(),
  },
  {
    id: '15',
    title: 'ブログ投稿15',
    content: 'これは15番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T14:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T14:00:00').toISOString(),
  },
  {
    id: '16',
    title: 'ブログ投稿16',
    content: 'これは16番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T15:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T15:00:00').toISOString(),
  },
  {
    id: '17',
    title: 'ブログ投稿17',
    content: 'これは17番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T16:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T16:00:00').toISOString(),
  },
  {
    id: '18',
    title: 'ブログ投稿18',
    content: 'これは18番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T17:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T17:00:00').toISOString(),
  },
  {
    id: '19',
    title: 'ブログ投稿19',
    content: 'これは19番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T18:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T18:00:00').toISOString(),
  },
  {
    id: '20',
    title: 'ブログ投稿20',
    content: 'これは20番目のブログ投稿です。',
    createdAt: new Date('2025-12-12T19:00:00').toISOString(),
    updatedAt: new Date('2025-12-12T19:00:00').toISOString(),
  },
];
