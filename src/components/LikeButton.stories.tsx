import type { Meta, StoryObj } from '@storybook/react';
import { LikeButton } from './LikeButton';

const meta: Meta<typeof LikeButton> = {
  component: LikeButton,
  title: 'components/LikeButton',
};
export default meta;

type Story = StoryObj<typeof LikeButton>;

export const Story01: Story = {
  name: 'Liked',
  args: {
    liked: true,
    count: 10,
    onClick: () => {},
  },
};

export const Story02: Story = {
  name: 'Not Liked',
  args: {
    liked: false,
    count: 5,
    onClick: () => {},
  },
};
// ...existing code (from src/app/components/LikeButton.stories.tsx)...
