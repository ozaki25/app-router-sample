import { CommentList } from './CommentList';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Features/Comment/CommentList',
  component: CommentList,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {
  name: '1ページ目',
  args: {
    blogId: '1',
    initialComments: [
      {
        id: '1',
        blogId: '1',
        content: '最初のコメントです',
        createdAt: '2025-12-11T10:00:00Z',
      },
      {
        id: '2',
        blogId: '1',
        content: '2番目のコメントです',
        createdAt: '2025-12-11T11:00:00Z',
      },
    ],
    initialCurrentPage: 1,
    initialTotalPages: 3,
  },
};

export const MiddlePage: Story = {
  name: '中間ページ',
  args: {
    blogId: '1',
    initialComments: [
      {
        id: '3',
        blogId: '1',
        content: '3番目のコメントです',
        createdAt: '2025-12-11T12:00:00Z',
      },
      {
        id: '4',
        blogId: '1',
        content: '4番目のコメントです',
        createdAt: '2025-12-11T13:00:00Z',
      },
    ],
    initialCurrentPage: 2,
    initialTotalPages: 3,
  },
};

export const LastPage: Story = {
  name: '最終ページ',
  args: {
    blogId: '1',
    initialComments: [
      {
        id: '5',
        blogId: '1',
        content: '5番目のコメントです',
        createdAt: '2025-12-11T14:00:00Z',
      },
    ],
    initialCurrentPage: 3,
    initialTotalPages: 3,
  },
};

export const Empty: Story = {
  name: 'コメントなし',
  args: {
    blogId: '1',
    initialComments: [],
    initialCurrentPage: 1,
    initialTotalPages: 1,
  },
};
