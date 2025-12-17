import { Blog } from '@/types/blog';
import type { UpdateBlogInput } from './repository';
import { type BlogResponse, responseSchema, toBlog } from './responseSchema';

export async function updateBlogRepository(input: UpdateBlogInput): Promise<Blog> {
  const data: BlogResponse = {
    id: input.id,
    title: input.title,
    content: input.content,
    created_at: '2025-01-01T00:00:00.900Z',
    updated_at: new Date().toISOString(),
  };
  return toBlog(responseSchema.parse(data));
}
