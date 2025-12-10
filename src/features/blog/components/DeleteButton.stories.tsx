import { DeleteButton } from './DeleteButton';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Features/Blog/DeleteButton',
  component: DeleteButton,
  args: {
    blogId: '1',
  },
} satisfies Meta<typeof DeleteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '通常状態',
};
