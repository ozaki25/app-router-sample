import type { Meta, StoryObj } from '@storybook/nextjs';
import { action } from 'storybook/actions';
import { Pagination } from './Pagination';

const meta = {
  title: 'UI/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {
  name: '最初のページ (3ページ中)',
  args: {
    currentPage: 1,
    totalPages: 3,
  },
};

export const MiddlePage: Story = {
  name: '中間ページ (3ページ中)',
  args: {
    currentPage: 2,
    totalPages: 3,
  },
};

export const LastPage: Story = {
  name: '最後のページ (3ページ中)',
  args: {
    currentPage: 3,
    totalPages: 3,
  },
};

export const ManyPagesFirst: Story = {
  name: '多数ページ - 最初',
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const ManyPagesMiddle: Story = {
  name: '多数ページ - 中間',
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

export const ManyPagesLast: Story = {
  name: '多数ページ - 最後',
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

export const SinglePage: Story = {
  name: '単一ページ',
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};

export const WithonChangePage: Story = {
  name: 'ボタンの場合',
  args: {
    currentPage: 2,
    totalPages: 5,
    onChangePage: action('onChangePage'),
  },
};
