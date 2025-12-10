import { PaginationInfo } from './PaginationInfo';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'UI/PaginationInfo',
  component: PaginationInfo,
} satisfies Meta<typeof PaginationInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {
  name: '最初のページ',
  args: {
    currentPage: 1,
    total: 10,
  },
};

export const SecondPage: Story = {
  name: '2ページ目',
  args: {
    currentPage: 2,
    total: 10,
  },
};

export const LastPage: Story = {
  name: '最後のページ',
  args: {
    currentPage: 3,
    total: 10,
  },
};

export const ManyItems: Story = {
  name: '多数の項目',
  args: {
    currentPage: 5,
    total: 100,
  },
};
