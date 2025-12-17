import type { CreateCommentInput } from './repository';

export async function createCommentRepository(_input: CreateCommentInput): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300));
}
