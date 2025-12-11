import { NextRequest, NextResponse } from 'next/server';

type Comment = {
  id: string;
  blog_id: string;
  content: string;
  created_at: string;
};

let comments: Comment[] = [];

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { id } = await params;
  const blogComments = comments.filter((c) => c.blog_id === id);
  return NextResponse.json(blogComments);
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
