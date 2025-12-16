import type { Meta, StoryObj } from '@storybook/nextjs';
import { LinkButton } from './LinkButton';

const meta = {
  title: 'UI/LinkButton',
  component: LinkButton,
  args: {
    href: '/blogs',
    children: 'リンクボタン',
    variant: 'primary',
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Primaryリンクボタン',
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  name: 'Secondaryリンクボタン',
  args: {
    variant: 'secondary',
  },
};

export const ExternalLink: Story = {
  name: '外部リンク',
  args: {
    href: 'https://example.com',
    children: '外部サイトへ',
  },
};
