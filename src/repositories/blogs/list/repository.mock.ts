import { getAllBlog } from '@/mock/data';
import { PaginatedBlogs } from '@/types/blog';
import { responseSchema, toPaginatedBlogs } from './responseSchema';

export async function getBlogs(page: number = 1): Promise<PaginatedBlogs> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const data = getAllBlog({ total: 20, currentPage: page });
  return toPaginatedBlogs(responseSchema.parse(data));
}
