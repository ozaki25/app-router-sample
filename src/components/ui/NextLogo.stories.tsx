import type { Meta, StoryObj } from '@storybook/nextjs';
import { NextLogo } from './NextLogo';

const meta = {
  title: 'UI/NextLogo',
  component: NextLogo,
} satisfies Meta<typeof NextLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Next.jsロゴ',
};
