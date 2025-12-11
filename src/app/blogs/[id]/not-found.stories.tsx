import Page from './not-found';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Page/Blog/NotFound',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '正常系',
};
