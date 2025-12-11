import { BlogForm } from './BlogForm';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { action } from 'storybook/actions';

const meta = {
  title: 'Features/Blog/BlogForm',
  component: BlogForm,
  args: {
    formAction: (formData: FormData) => {
      action('form-submit')(Object.fromEntries(formData));
    },
    submitLabel: '投稿',
  },
} satisfies Meta<typeof BlogForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Create: Story = {
  name: '新規作成',
};

export const Edit: Story = {
  name: '編集（既存データあり）',
  args: {
    submitLabel: '更新',
    defaultTitle: '既存のブログタイトル',
    defaultContent:
      'これは既存のブログ記事の本文です。編集モードでは、このようにデフォルト値が入力されています。',
  },
};

export const EditLongContent: Story = {
  name: '編集（長い本文）',
  args: {
    submitLabel: '更新',
    defaultTitle: 'Next.js App Routerの完全ガイド',
    defaultContent: `Next.js 13で導入されたApp Routerは、従来のPages Routerに代わる新しいルーティングシステムです。

Server Componentsをデフォルトとし、より直感的なファイルベースのルーティングを提供します。

主な特徴：
- Server Componentsによるパフォーマンス向上
- ネストされたレイアウトのサポート
- ストリーミングとSuspenseの統合
- より柔軟なデータフェッチング

これにより、開発者はより効率的でパフォーマンスの高いWebアプリケーションを構築できるようになりました。`,
  },
};

export const Pending: Story = {
  name: '送信中',
  args: {
    submitLabel: '投稿',
    isPending: true,
  },
};
