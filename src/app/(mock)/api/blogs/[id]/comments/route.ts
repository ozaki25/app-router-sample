import { NextRequest, NextResponse } from 'next/server';

type Comment = {
  id: string;
  blog_id: string;
  content: string;
  created_at: string;
};

let comments: Comment[] = [];

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const perPage = parseInt(searchParams.get('per_page') || '2', 10);

  // モックデータを5件に増やす
  if (comments.length === 0) {
    comments = [
      {
        id: '1',
        blog_id: id,
        content: '最初のコメントです',
        created_at: new Date('2025-12-11T10:00:00Z').toISOString(),
      },
      {
        id: '2',
        blog_id: id,
        content: '2番目のコメントです',
        created_at: new Date('2025-12-11T11:00:00Z').toISOString(),
      },
      {
        id: '3',
        blog_id: id,
        content: '3番目のコメントです',
        created_at: new Date('2025-12-11T12:00:00Z').toISOString(),
      },
      {
        id: '4',
        blog_id: id,
        content: '4番目のコメントです',
        created_at: new Date('2025-12-11T13:00:00Z').toISOString(),
      },
      {
        id: '5',
        blog_id: id,
        content: '5番目のコメントです',
        created_at: new Date('2025-12-11T14:00:00Z').toISOString(),
      },
    ];
  }

  const blogComments = comments.filter((c) => c.blog_id === id);
  const total = blogComments.length;
  const totalPages = Math.ceil(total / perPage);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedComments = blogComments.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedComments,
    total,
    total_pages: totalPages,
    current_page: page,
  });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { id } = await params;
  const body = await request.json();

  const newComment: Comment = {
    id: String(Date.now()),
    blog_id: id,
    content: body.content,
    created_at: new Date().toISOString(),
  };

  comments.push(newComment);
  return NextResponse.json(newComment, { status: 201 });
}
