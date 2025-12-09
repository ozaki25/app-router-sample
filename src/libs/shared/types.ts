export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateBlogInput = {
  title: string;
  content: string;
};

export type UpdateBlogInput = {
  id: string;
  title: string;
  content: string;
};

export type ActionState = {
  success: boolean;
  error?: string;
};
