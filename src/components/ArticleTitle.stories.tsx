import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTitle } from './ArticleTitle';

const meta: Meta<typeof ArticleTitle> = {
  component: ArticleTitle,
  title: 'components/ArticleTitle',
};
export default meta;

type Story = StoryObj<typeof ArticleTitle>;

export const Story01: Story = {
  name: 'Medium Title',
  args: {
    size: 'md',
    title: '中くらいのタイトル',
  },
};

export const Story02: Story = {
  name: 'Small Title',
  args: {
    size: 'sm',
    title: '小さいタイトル',
  },
};

export const Story03: Story = {
  name: 'Large Title',
  args: {
    size: 'lg',
    title: '大きいタイトル',
  },
};
