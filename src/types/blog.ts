export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type PaginatedBlogs = {
  total: number;
  totalPages: number;
  currentPage: number;
  blogs: Blog[];
};
