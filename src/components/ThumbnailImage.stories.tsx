import type { Meta, StoryObj } from '@storybook/react';
import { ThumbnailImage } from './ThumbnailImage';

const meta: Meta<typeof ThumbnailImage> = {
  component: ThumbnailImage,
  title: 'components/ThumbnailImage',
};
export default meta;

type Story = StoryObj<typeof ThumbnailImage>;

export const Story01: Story = {
  name: 'Default',
  args: {
    src: '/vercel.svg',
    alt: 'サムネイル',
  },
};
// ...existing code (from src/app/components/ThumbnailImage.stories.tsx)...
