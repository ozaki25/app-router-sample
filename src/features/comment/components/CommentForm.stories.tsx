import type { Meta, StoryObj } from '@storybook/nextjs';
import { action } from 'storybook/actions';
import { CommentForm } from './CommentForm';

const meta = {
  title: 'Features/Comment/CommentForm',
  component: CommentForm,
  args: {
    blogId: '1',
    onPosted: action('onPosted'),
  },
} satisfies Meta<typeof CommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '通常状態',
};
