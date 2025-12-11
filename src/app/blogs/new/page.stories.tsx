import Page from './page';
import { createBlogError } from '@/mock/handler';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Page/Blog/New',
  component: Page,
} satisfies Meta<typeof Page>;

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
        createBlog: createBlogError(),
      },
    },
  },
};
