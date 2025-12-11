import { INITIAL_BLOGS } from '../data';
import { Blog } from '@/types/blog';
import { NextResponse } from 'next/server';

const getBlogs = (): Blog[] => {
  if (typeof global !== 'undefined' && (global as any).blogsData) {
    return (global as any).blogsData as Blog[];
  }
  if (typeof global !== 'undefined') {
    (global as any).blogsData = [...INITIAL_BLOGS];
  }
  return (global as any).blogsData as Blog[];
};

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const { id } = await params;
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json({
    id: blog.id,
    title: blog.title,
    content: blog.content,
    created_at: blog.createdAt,
    updated_at: blog.updatedAt,
  });
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const { id } = await params;
  const body = await request.json();
  const blogs = getBlogs();

  const index = blogs.findIndex((b) => b.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  blogs[index] = {
    ...blogs[index],
    title: body.title,
    content: body.content,
    updatedAt: new Date().toISOString(),
  };

  const updatedBlog = blogs[index];
  return NextResponse.json({
    id: updatedBlog.id,
    title: updatedBlog.title,
    content: updatedBlog.content,
    created_at: updatedBlog.createdAt,
    updated_at: updatedBlog.updatedAt,
  });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const { id } = await params;
  const blogs = getBlogs();

  const index = blogs.findIndex((b) => b.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  blogs.splice(index, 1);

  return NextResponse.json({ success: true });
}
