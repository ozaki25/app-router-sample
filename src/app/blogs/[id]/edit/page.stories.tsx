import type { Meta, StoryObj } from '@storybook/nextjs';
import { updateBlogError } from '@/mock/handler';
import { EditBlogPageComponent } from './page';

const meta = {
  title: 'Page/Blog/Edit',
  component: EditBlogPageComponent,
  args: {
    blog: {
      id: '1',
      title: '既存のブログタイトル',
      content:
        'これは既存のブログ記事の本文です。編集モードでは、このようにデフォルト値が入力されています。',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    },
  },
} satisfies Meta<typeof EditBlogPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '正常系',
};

export const Error: Story = {
  name: '投稿エラー',
  parameters: {
    msw: {
      handlers: {
        updateBlog: updateBlogError(),
      },
    },
  },
};
