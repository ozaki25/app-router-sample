import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './BlogCard';

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
  title: 'components/BlogCard',
};
export default meta;

type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  name: 'Default',
  args: {
    title: 'ブログタイトル',
    author: '山田太郎',
    authorIcon: '/globe.svg',
    date: '2023-01-01',
    tags: ['Next.js', 'React'],
    thumbnail: '/vercel.svg',
  },
};

export const ManyTags: Story = {
  name: 'タグが多い',
  args: {
    title: 'タグが多い記事',
    author: 'タグ太郎',
    authorIcon: '/file.svg',
    date: '2025-11-30',
    tags: ['Next.js', 'React', 'TypeScript', 'UI', 'CSS', 'Tailwind', 'Storybook', 'Vercel', 'Jest', 'MSW'],
    thumbnail: '/globe.svg',
  },
};

export const NoImage: Story = {
  name: '画像なし',
  args: {
    title: '画像がない記事',
    author: '画像無し子',
    authorIcon: '/window.svg',
    date: '2024-12-01',
    tags: ['テスト', 'ノーイメージ'],
    thumbnail: '',
  },
};

export const LongTitle: Story = {
  name: '長いタイトル',
  args: {
    title: 'これはとてもとても長いタイトルで、UIの折り返しやレイアウト崩れを検証するためのものです。Next.jsとTailwind CSSでどこまで美しく表示できるか？',
    author: '長文太郎',
    authorIcon: '/vercel.svg',
    date: '2022-01-01',
    tags: ['長文', '検証'],
    thumbnail: '/next.svg',
  },
};

export const DifferentAuthor: Story = {
  name: '著者・日付違い',
  args: {
    title: '著者が違う記事',
    author: 'みどり',
    authorIcon: '/window.svg',
    date: '2023-11-11',
    tags: ['デザイン', 'カラー'],
    thumbnail: '/vercel.svg',
  },
};

export const FutureDate: Story = {
  name: '未来日付',
  args: {
    title: '未来の記事',
    author: '未来人',
    authorIcon: '/globe.svg',
    date: '2099-12-31',
    tags: ['未来', 'SF'],
    thumbnail: '/file.svg',
  },
};

export const NoTags: Story = {
  name: 'タグなし',
  args: {
    title: 'タグがない記事',
    author: '名無し',
    authorIcon: '/globe.svg',
    date: '2023-05-05',
    tags: [],
    thumbnail: '/vercel.svg',
  },
};

export const PngImage: Story = {
  name: 'PNG画像',
  args: {
    title: 'PNG画像のサムネ',
    author: 'PNG太郎',
    authorIcon: '/globe.svg',
    date: '2023-06-06',
    tags: ['PNG', '画像'],
    thumbnail: 'https://placehold.jp/150x80.png',
  },
};

export const JpegImage: Story = {
  name: 'JPEG画像',
  args: {
    title: 'JPEG画像のサムネ',
    author: 'JPEG花子',
    authorIcon: '/file.svg',
    date: '2023-07-07',
    tags: ['JPEG', '画像'],
    thumbnail: 'https://placehold.jp/150x80.jpg',
  },
};
