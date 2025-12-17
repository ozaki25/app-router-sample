import { getBlog as getBlogMock } from '@/mock/data';
import { Blog } from '@/types/blog';
import { responseSchema, toBlog } from './responseSchema';

export async function getBlog(id: string): Promise<Blog | null> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const data = getBlogMock(id);
  return toBlog(responseSchema.parse(data));
}
