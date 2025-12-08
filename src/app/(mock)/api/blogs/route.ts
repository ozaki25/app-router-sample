import { NextResponse } from 'next/server';
import { INITIAL_BLOGS } from '@/libs/shared/constants';
import { Blog } from '@/libs/shared/types';

// グローバルスコープでデータを共有
const getBlogs = (): Blog[] => {
  if (typeof global !== 'undefined' && (global as any).blogsData) {
    return (global as any).blogsData as Blog[];
  }
  if (typeof global !== 'undefined') {
    (global as any).blogsData = [...INITIAL_BLOGS];
  }
  return (global as any).blogsData as Blog[];
};

export async function GET() {
  const blogs = getBlogs();
  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const blogs = getBlogs();

  const newBlog: Blog = {
    id: String(Date.now()),
    title,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  blogs.push(newBlog);

  return NextResponse.json(newBlog, { status: 201 });
}
