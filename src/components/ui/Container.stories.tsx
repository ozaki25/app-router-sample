import { Container } from './Container';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'UI/Container',
  component: Container,
  args: {
    children: (
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-bold mb-2">コンテナ内のコンテンツ</h2>
        <p>このコンテンツはContainerコンポーネントで包まれています。</p>
      </div>
    ),
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'デフォルト(max-width: 1200px)',
};

export const Medium: Story = {
  name: 'Medium(max-width: 960px)',
  args: {
    maxWidth: 'md',
  },
};

export const Small: Story = {
  name: 'Small(max-width: 720px)',
  args: {
    maxWidth: 'sm',
  },
};
