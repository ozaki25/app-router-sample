import { BlogsPageComponent } from './page';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Page/Blog/List',
  component: BlogsPageComponent,
  args: {
    blogs: [
      {
        id: '1',
        title: '既存のブログタイトル',
        content:
          'これは既存のブログ記事の本文です。編集モードでは、このようにデフォルト値が入力されています。',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-02T00:00:00Z',
      },
      {
        id: '2',
        title: 'Next.jsの新機能について',
        content:
          'Next.js 13で導入されたApp Routerは、従来のPages Routerに代わる新しいルーティングシステムです。',
        createdAt: '2024-02-01T00:00:00Z',
        updatedAt: '2024-02-02T00:00:00Z',
      },
      {
        id: '3',
        title: 'TypeScriptで型安全なコードを書く',
        content:
          'TypeScriptの厳格な型チェックにより、バグを未然に防ぐことができます。zodを使ったスキーマバリデーションも活用しています。',
        createdAt: '2024-03-01T00:00:00Z',
        updatedAt: '2024-03-02T00:00:00Z',
      },
      {
        id: '4',
        title: 'Tailwind CSSでスタイリング',
        content:
          'このブログアプリはTailwind CSSを使ってBootstrap風のUIを実装しています。シンプルで使いやすいデザインを目指しました。',
        createdAt: '2024-04-01T00:00:00Z',
        updatedAt: '2024-04-02T00:00:00Z',
      },
    ],
    total: 1,
    currentPage: 1,
    totalPages: 1,
  },
} satisfies Meta<typeof BlogsPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '1ページのみ',
  args: {
    blogs: [
      {
        id: '1',
        title: 'ブログタイトル',
        content: 'これはブログ記事の本文です。',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-02T00:00:00Z',
      },
    ],
    total: 1,
    currentPage: 1,
    totalPages: 1,
  },
};

export const SecondPage: Story = {
  name: '複数ページ',
  args: {
    total: 10,
    currentPage: 2,
    totalPages: 3,
  },
};

export const Empty: Story = {
  name: 'ブログなし',
  args: {
    blogs: [],
    total: 0,
    currentPage: 1,
    totalPages: 0,
  },
};
