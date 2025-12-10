import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { action } from 'storybook/actions';

const meta = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'ボタン',
    variant: 'primary',
    onClick: action('click'),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Primaryボタン',
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  name: 'Secondaryボタン',
  args: {
    variant: 'secondary',
  },
};

export const Danger: Story = {
  name: 'Dangerボタン',
  args: {
    variant: 'danger',
  },
};

export const Disabled: Story = {
  name: 'disabledなボタン',
  args: {
    disabled: true,
  },
};
