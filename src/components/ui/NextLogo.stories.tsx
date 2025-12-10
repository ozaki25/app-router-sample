import { NextLogo } from './NextLogo';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'UI/NextLogo',
  component: NextLogo,
} satisfies Meta<typeof NextLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Next.jsロゴ',
};
