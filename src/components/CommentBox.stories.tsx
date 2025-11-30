import type { Meta, StoryObj } from '@storybook/react';
import { CommentBox } from './CommentBox';

const meta: Meta<typeof CommentBox> = {
  component: CommentBox,
  title: 'components/CommentBox',
};
export default meta;

type Story = StoryObj<typeof CommentBox>;

export const Story01: Story = {
  name: 'Default',
  args: {
    value: 'コメント例',
    onChange: () => {},
  },
};
// ...existing code (from src/app/components/CommentBox.stories.tsx)...
