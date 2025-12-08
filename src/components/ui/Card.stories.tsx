import type { Meta, StoryObj } from '@storybook/nextjs';
import { Card, CardHeader, CardBody, CardFooter } from './Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  args: {
    children: (
      <>
        <CardHeader>
          <h3>カードタイトル</h3>
        </CardHeader>
        <CardBody>
          <p>カードの本文です。ここにコンテンツが入ります。</p>
        </CardBody>
        <CardFooter>
          <p className="text-sm text-gray-500">フッター情報</p>
        </CardFooter>
      </>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'デフォルトのカード',
};

export const WithHeaderOnly: Story = {
  name: 'ヘッダーのみ',
  args: {
    children: (
      <CardHeader>
        <h3>ヘッダーのみのカード</h3>
      </CardHeader>
    ),
  },
};

export const WithBodyOnly: Story = {
  name: 'ボディのみ',
  args: {
    children: (
      <CardBody>
        <p>本文のみのカードです。</p>
      </CardBody>
    ),
  },
};

export const WithoutFooter: Story = {
  name: 'フッターなし',
  args: {
    children: (
      <>
        <CardHeader>
          <h3>フッターなしのカード</h3>
        </CardHeader>
        <CardBody>
          <p>フッターがないカードです。</p>
        </CardBody>
      </>
    ),
  },
};
