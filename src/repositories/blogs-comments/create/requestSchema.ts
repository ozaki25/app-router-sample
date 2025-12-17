import { CreateCommentInput } from './repository';

export const toApiRequest = (input: CreateCommentInput) => ({
  blog_id: input.blogId,
  content: input.content,
});
