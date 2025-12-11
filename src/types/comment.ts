export type Comment = {
  id: string;
  blogId: string;
  content: string;
  createdAt: string;
};

export type PaginatedComments = {
  total: number;
  totalPages: number;
  currentPage: number;
  comments: Comment[];
};
