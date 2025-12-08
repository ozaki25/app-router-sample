import { Blog, CreateBlogInput, UpdateBlogInput } from '@/libs/shared/types';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';
const API_URL = `${API_BASE_URL}/api/blogs`;

export const blogRepository = {
  async getAll(): Promise<Blog[]> {
    const response = await fetch(API_URL, {
      next: { tags: ['blogs'] },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    return response.json();
  },

  async getById(id: string): Promise<Blog | null> {
    const response = await fetch(`${API_URL}/${id}`, {
      next: { tags: ['blogs', `blog-${id}`] },
    });
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    return response.json();
  },

  async create(input: CreateBlogInput): Promise<Blog> {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    if (!response.ok) {
      throw new Error('Failed to create blog');
    }
    return response.json();
  },

  async update(input: UpdateBlogInput): Promise<Blog> {
    const response = await fetch(`${API_URL}/${input.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: input.title, content: input.content }),
    });
    if (!response.ok) {
      throw new Error('Failed to update blog');
    }
    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete blog');
    }
  },
};
