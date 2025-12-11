import { BlogDetailPageComponent } from './page';
import { createCommentError, deleteBlogError, getCommentsError } from '@/mock/handler';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Page/Blog/Detail',
  component: BlogDetailPageComponent,
  args: {
    id: '1',
    blog: {
      id: '1',
      title: '既存のブログタイトル',
      content:
        'これは既存のブログ記事の本文です。編集モードでは、このようにデフォルト値が入力されています。',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    },
    paginatedComments: {
      comments: [],
      total: 0,
      currentPage: 1,
      totalPages: 0,
    },
  },
} satisfies Meta<typeof BlogDetailPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyComment: Story = {
  name: 'コメントなし',
  args: {
    paginatedComments: {
      comments: [],
      total: 0,
      currentPage: 1,
      totalPages: 0,
    },
  },
};

export const WithComments: Story = {
  name: 'コメントあり',
  args: {
    paginatedComments: {
      comments: [
        {
          id: '1',
          blogId: '1',
          content: 'これは最初のコメントです。',
          createdAt: '2024-01-03T00:00:00Z',
        },
        {
          id: '2',
          blogId: '1',
          content: 'これは2番目のコメントです。',
          createdAt: '2024-01-04T00:00:00Z',
        },
      ],
      total: 2,
      currentPage: 1,
      totalPages: 1,
    },
  },
};

export const ManyComments: Story = {
  name: 'コメント複数ページ',
  args: {
    paginatedComments: {
      comments: [
        {
          id: '1',
          blogId: '1',
          content: 'これは最初のコメントです。',
          createdAt: '2024-01-03T00:00:00Z',
        },
        {
          id: '2',
          blogId: '1',
          content: 'これは2番目のコメントです。',
          createdAt: '2024-01-04T00:00:00Z',
        },
      ],
      total: 12,
      currentPage: 1,
      totalPages: 3,
    },
  },
};

export const DeleteError: Story = {
  name: '削除エラー',
  parameters: {
    msw: {
      handlers: {
        deleteBlog: deleteBlogError(),
      },
    },
  },
};

export const CreateCommentError: Story = {
  name: 'コメント投稿エラー',
  parameters: {
    msw: {
      handlers: {
        createComment: createCommentError(),
      },
    },
  },
};

export const GetCommentError: Story = {
  name: 'コメント取得エラー',
  args: {
    paginatedComments: {
      comments: [
        {
          id: '1',
          blogId: '1',
          content: 'これは最初のコメントです。',
          createdAt: '2024-01-03T00:00:00Z',
        },
        {
          id: '2',
          blogId: '1',
          content: 'これは2番目のコメントです。',
          createdAt: '2024-01-04T00:00:00Z',
        },
      ],
      total: 12,
      currentPage: 1,
      totalPages: 3,
    },
  },
  parameters: {
    msw: {
      handlers: {
        getComments: getCommentsError(),
      },
    },
  },
};
