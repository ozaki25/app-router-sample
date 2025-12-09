import { INITIAL_BLOGS } from '../data';
import { Blog } from '@/types/blog';
import { NextResponse } from 'next/server';

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

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json(blog);
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { title, content } = await request.json();
  const blogs = getBlogs();

  const index = blogs.findIndex((b) => b.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  blogs[index] = {
    ...blogs[index],
    title,
    content,
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json(blogs[index]);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogs = getBlogs();

  const index = blogs.findIndex((b) => b.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  blogs.splice(index, 1);

  return NextResponse.json({ success: true });
}
