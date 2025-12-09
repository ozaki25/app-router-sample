import type { Meta, StoryObj } from '@storybook/nextjs';
import { DeleteButton } from './DeleteButton';

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
