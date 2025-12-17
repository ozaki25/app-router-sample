import { PAGE_SIZE } from '@/constants/pagination';
import {
  CommentResponse,
  PaginatedCommentsResponse,
} from '@/repositories/blogs-comments/list/responseSchema';
import { BlogResponse, PaginatedBlogsResponse } from '@/repositories/blogs/list/responseSchema';

export function getBlog(id: string): BlogResponse {
  return {
    id,
    title: `Sample Blog ${id}`,
    content: 'This is a sample blog content.',
    created_at: '2025-01-01T00:00:00.900Z',
    updated_at: '2025-01-01T00:00:00.900Z',
  };
}

export function getBlogList(count: number): BlogResponse[] {
  return [...Array(count)].map((_, index) => getBlog(`blog-${index + 1}`));
}

export function getAllBlog({
  total,
  currentPage,
}: {
  total: number;
  currentPage: number;
}): PaginatedBlogsResponse {
  const blogs = getBlogList(total);
  return {
    total,
    total_pages: Math.ceil(total / PAGE_SIZE),
    current_page: currentPage,
    data: blogs.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
  };
}

export function getComment(id: string, blogId: string): CommentResponse {
  return {
    id,
    blog_id: blogId,
    content: `This is a sample comment ${id} for blog ${blogId}.`,
    created_at: '2025-01-01T00:00:00.900Z',
  };
}

export function getCommentList(blogId: string, count: number): CommentResponse[] {
  return [...Array(count)].map((_, index) => getComment(`comment-${index + 1}`, blogId));
}

export function getCommentsByBlogId({
  blogId,
  total,
  currentPage,
  perPage,
}: {
  blogId: string;
  total: number;
  currentPage: number;
  perPage: number;
}): PaginatedCommentsResponse {
  const comments = getCommentList(blogId, total);
  return {
    total,
    total_pages: Math.ceil(total / perPage),
    current_page: currentPage,
    data: comments.slice((currentPage - 1) * perPage, currentPage * perPage),
  };
}
