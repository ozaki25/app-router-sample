import { BlogForm } from './BlogForm';
import type { ActionState } from '@/types/action';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { action } from 'storybook/actions';

const mockAction = async (_prevState: ActionState, formData: FormData): Promise<ActionState> => {
  action('form-submit')(Object.fromEntries(formData));
  return { success: true };
};

const meta = {
  title: 'Features/Blog/BlogForm',
  component: BlogForm,
  args: {
    action: mockAction,
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
    blog: {
      id: '1',
      title: '既存のブログタイトル',
      content:
        'これは既存のブログ記事の本文です。編集モードでは、このようにデフォルト値が入力されています。',
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z',
    },
  },
};

export const EditLongContent: Story = {
  name: '編集（長い本文）',
  args: {
    submitLabel: '更新',
    blog: {
      id: '2',
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
};
