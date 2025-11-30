import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'components/Avatar',
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Story01: Story = {
  name: 'Medium',
  args: {
    src: '/globe.svg',
    alt: '地球',
    size: 'md',
  },
};

export const Story02: Story = {
  name: 'Small',
  args: {
    src: '/globe.svg',
    alt: '地球',
    size: 'sm',
  },
};

export const Story03: Story = {
  name: 'Large',
  args: {
    src: '/globe.svg',
    alt: '地球',
    size: 'lg',
  },
};
