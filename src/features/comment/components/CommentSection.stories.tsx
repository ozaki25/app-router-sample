import { CommentSection } from './CommentSection';
import { PaginatedComments } from '@/types/comment';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Features/Comment/CommentSection',
  component: CommentSection,
  args: {
    blogId: '1',
  },
} satisfies Meta<typeof CommentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockComments: PaginatedComments = {
  comments: [
    {
      id: '1',
      blogId: '1',
      content: 'これは最初のコメントです。',
      createdAt: '2024-01-01T10:00:00Z',
    },
    {
      id: '2',
      blogId: '1',
      content: 'これは2番目のコメントです。',
      createdAt: '2024-01-01T11:00:00Z',
    },
  ],
  total: 5,
  totalPages: 3,
  currentPage: 1,
};

export const Default: Story = {
  name: 'デフォルト',
  args: {
    blogId: '1',
    initialPaginatedComments: mockComments,
  },
};

export const Empty: Story = {
  name: '空の状態',
  args: {
    blogId: '1',
    initialPaginatedComments: {
      comments: [],
      total: 0,
      totalPages: 0,
      currentPage: 1,
    },
  },
};

export const SinglePage: Story = {
  name: '1ページのみ',
  args: {
    blogId: '1',
    initialPaginatedComments: {
      comments: [
        {
          id: '1',
          blogId: '1',
          content: 'これは唯一のコメントです。',
          createdAt: '2024-01-01T10:00:00Z',
        },
      ],
      total: 1,
      totalPages: 1,
      currentPage: 1,
    },
  },
};

export const LastPage: Story = {
  name: '最終ページ',
  args: {
    blogId: '1',
    initialPaginatedComments: {
      comments: [
        {
          id: '5',
          blogId: '1',
          content: 'これは最後のコメントです。',
          createdAt: '2024-01-01T14:00:00Z',
        },
      ],
      total: 5,
      totalPages: 3,
      currentPage: 3,
    },
  },
};
