import { getBlog } from '@/mock/data';
import { Blog } from '@/types/blog';
import { responseSchema, toBlog } from './responseSchema';

export async function getByIdBlogRepository(id: string): Promise<Blog | null> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const data = getBlog(id);
  return toBlog(responseSchema.parse(data));
}
