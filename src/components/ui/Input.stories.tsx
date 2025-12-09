import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'UI/Input',
  component: Input,
  args: {
    name: 'inputField',
    placeholder: 'テキストを入力してください',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'デフォルト',
};

export const WithLabel: Story = {
  name: 'ラベルあり',
  args: {
    label: '入力フィールド',
  },
};

export const WithValue: Story = {
  name: '初期値あり',
  args: {
    label: 'サンプル入力',
    defaultValue: 'サンプルテキスト',
  },
};

export const Required: Story = {
  name: '必須フィールド',
  args: {
    label: 'ユーザー名',
    required: true,
  },
};
