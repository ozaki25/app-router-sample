import { PageHeader } from './PageHeader';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'UI/PageHeader',
  component: PageHeader,
  args: {
    title: 'ページタイトル',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'デフォルト(左寄せ)',
};

export const Center: Story = {
  name: '中央寄せ',
  args: {
    align: 'center',
  },
};

export const WithDescription: Story = {
  name: '説明文あり',
  args: {
    description: 'これはページの説明文です。',
  },
};

export const CenterWithDescription: Story = {
  name: '中央寄せ(説明文あり)',
  args: {
    align: 'center',
    description: 'このページは中央寄せで表示されます。',
  },
};

export const LongTitle: Story = {
  name: '長いタイトル',
  args: {
    title: 'これは非常に長いページタイトルの例です。複数行になる可能性があります。',
  },
};
