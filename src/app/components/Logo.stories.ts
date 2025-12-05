import type { Meta, StoryObj } from '@storybook/nextjs';
import Logo from './Logo';

const meta = {
  title: 'Example/Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story1: Story = {
  name: 'Nextのロゴ(png)',
  args: {
    src: '/next.png',
  },
};

export const Story2: Story = {
  name: 'Nextのロゴ(svg)',
  args: {
    src: '/next.svg',
  },
};
