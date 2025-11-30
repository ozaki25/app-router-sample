import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'components/Tag',
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Story01: Story = {
  name: 'Default',
  args: {
    label: 'Next.js',
  },
};
// ...existing code (from src/app/components/Tag.stories.tsx)...
