import { Blog } from '@/types/blog';
import { CreateBlogInput } from './repository';

export async function createBlogRepository(input: CreateBlogInput): Promise<Blog> {
  return {
    id: 'mock-id',
    title: input.title,
    content: input.content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
