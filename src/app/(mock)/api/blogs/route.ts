import { INITIAL_BLOGS } from './data';
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

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const blogs = getBlogs();
  const response = blogs.map((blog) => ({
    id: blog.id,
    title: blog.title,
    content: blog.content,
    created_at: blog.createdAt,
    updated_at: blog.updatedAt,
  }));
  return NextResponse.json(response);
}

export async function POST(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const body = await request.json();
  const blogs = getBlogs();

  const newBlog: Blog = {
    id: String(Date.now()),
    title: body.title,
    content: body.content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  blogs.push(newBlog);

  return NextResponse.json(
    {
      id: newBlog.id,
      title: newBlog.title,
      content: newBlog.content,
      created_at: newBlog.createdAt,
      updated_at: newBlog.updatedAt,
    },
    { status: 201 }
  );
}
