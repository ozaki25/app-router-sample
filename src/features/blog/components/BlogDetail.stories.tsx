import type { Meta, StoryObj } from '@storybook/nextjs';
import { BlogDetail } from './BlogDetail';

const meta = {
  title: 'Features/Blog/BlogDetail',
  component: BlogDetail,
  args: {
    blog: {
      id: '1',
      title: 'Next.js App Routerの完全ガイド',
      content: `Next.js 13で導入されたApp Routerは、従来のPages Routerに代わる新しいルーティングシステムです。

Server Componentsをデフォルトとし、より直感的なファイルベースのルーティングを提供します。

主な特徴：
- Server Componentsによるパフォーマンス向上
- ネストされたレイアウトのサポート
- ストリーミングとSuspenseの統合
- より柔軟なデータフェッチング

これにより、開発者はより効率的でパフォーマンスの高いWebアプリケーションを構築できるようになりました。`,
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-16T14:30:00Z',
    },
  },
} satisfies Meta<typeof BlogDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '基本表示',
};

export const ShortContent: Story = {
  name: '短い本文',
  args: {
    blog: {
      id: '2',
      title: '今日のランチ',
      content: '美味しいカレーを食べました。',
      createdAt: '2024-01-20T12:00:00Z',
      updatedAt: '2024-01-20T12:00:00Z',
    },
  },
};

export const LongTitle: Story = {
  name: '長いタイトル',
  args: {
    blog: {
      id: '3',
      title:
        'これは非常に長いタイトルの例です。タイトルが長い場合のレイアウトの確認のために用意されたストーリーです。',
      content: '本文の内容です。',
      createdAt: '2024-01-21T09:00:00Z',
      updatedAt: '2024-01-21T09:00:00Z',
    },
  },
};
