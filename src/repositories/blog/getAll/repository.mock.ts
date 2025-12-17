import { getAllBlog } from '@/mock/data';
import { PaginatedBlogs } from '@/types/blog';
import { responseSchema, toPaginatedBlogs } from './responseSchema';

export async function getAllBlogRepository(page: number = 1): Promise<PaginatedBlogs> {
  const data = getAllBlog({ total: 20, currentPage: page });
  return toPaginatedBlogs(responseSchema.parse(data));
}
