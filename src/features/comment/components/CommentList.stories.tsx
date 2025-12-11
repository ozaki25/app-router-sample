import { CommentList } from './CommentList';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Features/Comment/CommentList',
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  name: 'コメントなし',
  args: {
    comments: [],
  },
};

export const WithComments: Story = {
  name: 'コメントあり',
  args: {
    comments: [
      {
        id: '1',
        blogId: '1',
        content: 'とても参考になりました！',
        createdAt: '2024-01-15T10:30:00Z',
      },
      {
        id: '2',
        blogId: '1',
        content: '続きが気になります。\n次の記事も楽しみにしています。',
        createdAt: '2024-01-15T14:20:00Z',
      },
      {
        id: '3',
        blogId: '1',
        content: 'わかりやすい説明でした。',
        createdAt: '2024-01-16T09:15:00Z',
      },
    ],
  },
};
