import type { Meta, StoryObj } from '@storybook/nextjs';
import { Textarea } from './Textarea';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  args: {
    name: 'textareaField',
    placeholder: '本文を入力してください',
    rows: 5,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'デフォルト',
};

export const WithLabel: Story = {
  name: 'ラベルあり',
  args: {
    label: '本文',
  },
};

export const WithValue: Story = {
  name: '初期値あり',
  args: {
    label: '投稿内容',
    defaultValue: 'これはサンプルテキストです。\n複数行にわたる内容を入力できます。',
  },
};

export const LargeRows: Story = {
  name: '大きいテキストエリア',
  args: {
    label: '詳細説明',
    rows: 10,
  },
};

export const Required: Story = {
  name: '必須フィールド',
  args: {
    label: 'コメント',
    required: true,
  },
};
