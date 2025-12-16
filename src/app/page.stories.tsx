import type { Meta, StoryObj } from '@storybook/nextjs';
import Page from './page';

const meta = {
  title: 'Page/Home',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'ホーム',
};
