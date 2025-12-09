import { BlogList } from './BlogList';
import type { Meta, StoryObj } from '@storybook/nextjs';

const mockBlogs = [
  {
    id: '1',
    title: 'Next.js App Routerの基礎',
    content:
      'Next.js 13で導入されたApp Routerは、従来のPages Routerに代わる新しいルーティングシステムです。Server Componentsをデフォルトとし、より直感的なファイルベースのルーティングを提供します。',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'TypeScriptで型安全な開発',
    content:
      'TypeScriptを使用することで、コンパイル時に型エラーを検出し、より安全で保守性の高いコードを書くことができます。',
    createdAt: '2024-01-16T12:30:00Z',
    updatedAt: '2024-01-16T12:30:00Z',
  },
  {
    id: '3',
    title: 'Tailwind CSSでスタイリング',
    content:
      'Tailwind CSSはユーティリティファーストのCSSフレームワークで、クラス名を組み合わせることで素早くUIを構築できます。',
    createdAt: '2024-01-17T09:15:00Z',
    updatedAt: '2024-01-17T09:15:00Z',
  },
];

const meta = {
  title: 'Features/Blog/BlogList',
  component: BlogList,
  args: {
    blogs: mockBlogs,
  },
} satisfies Meta<typeof BlogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '通常表示（複数記事）',
};

export const SingleBlog: Story = {
  name: '1件のみ',
  args: {
    blogs: [mockBlogs[0]],
  },
};

export const Empty: Story = {
  name: '空の状態',
  args: {
    blogs: [],
  },
};

export const ManyBlogs: Story = {
  name: '多数の記事',
  args: {
    blogs: [
      ...mockBlogs,
      {
        id: '4',
        title: '4つ目の記事',
        content: 'これは4つ目の記事です。',
        createdAt: '2024-01-18T14:00:00Z',
        updatedAt: '2024-01-18T14:00:00Z',
      },
      {
        id: '5',
        title: '5つ目の記事',
        content: 'これは5つ目の記事です。',
        createdAt: '2024-01-19T16:20:00Z',
        updatedAt: '2024-01-19T16:20:00Z',
      },
      {
        id: '6',
        title: '6つ目の記事',
        content: 'これは6つ目の記事です。',
        createdAt: '2024-01-20T11:45:00Z',
        updatedAt: '2024-01-20T11:45:00Z',
      },
    ],
  },
};
