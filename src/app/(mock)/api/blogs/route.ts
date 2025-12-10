import { INITIAL_BLOGS } from './data';
import { PAGE_SIZE } from '@/constants/pagination';
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

export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 1;

  const blogs = getBlogs();
  const total = blogs.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  // 不正なページ番号の場合は404を返す
  if (page < 1 || page > totalPages) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  }

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const response = {
    total,
    total_pages: totalPages,
    current_page: page,
    data: paginatedBlogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      content: blog.content,
      created_at: blog.createdAt,
      updated_at: blog.updatedAt,
    })),
  };

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
