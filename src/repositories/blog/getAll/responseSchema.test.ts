import { describe, expect, it } from 'vitest';
import { responseSchema, toBlog, toPaginatedBlogs } from './responseSchema';

describe('responseSchema', () => {
  it('valid data を受け入れる', () => {
    const validData = {
      total: 10,
      total_pages: 3,
      current_page: 1,
      data: [
        {
          id: '1',
          title: 'Test Blog',
          content: 'Test content',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
        },
      ],
    };

    const result = responseSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('必須フィールドが不足している場合は失敗する', () => {
    const invalidData = {
      total: 10,
      data: [],
    };

    const result = responseSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('data配列が空の場合も受け入れる', () => {
    const validData = {
      total: 0,
      total_pages: 0,
      current_page: 1,
      data: [],
    };

    const result = responseSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('toBlog が snake_case から camelCase に変換する', () => {
    const apiResponse = {
      id: '1',
      title: 'Test Blog',
      content: 'Test content',
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-02T00:00:00Z',
    };

    const blog = toBlog(apiResponse);

    expect(blog).toEqual({
      id: '1',
      title: 'Test Blog',
      content: 'Test content',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    });
  });

  it('toPaginatedBlogs が正しく変換する', () => {
    const apiResponse = {
      total: 10,
      total_pages: 3,
      current_page: 2,
      data: [
        {
          id: '1',
          title: 'Blog 1',
          content: 'Content 1',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
        },
        {
          id: '2',
          title: 'Blog 2',
          content: 'Content 2',
          created_at: '2024-01-02T00:00:00Z',
          updated_at: '2024-01-02T00:00:00Z',
        },
      ],
    };

    const result = toPaginatedBlogs(apiResponse);

    expect(result).toEqual({
      total: 10,
      totalPages: 3,
      currentPage: 2,
      blogs: [
        {
          id: '1',
          title: 'Blog 1',
          content: 'Content 1',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-01T00:00:00Z',
        },
        {
          id: '2',
          title: 'Blog 2',
          content: 'Content 2',
          createdAt: '2024-01-02T00:00:00Z',
          updatedAt: '2024-01-02T00:00:00Z',
        },
      ],
    });
  });

  it('toPaginatedBlogs が空配列を処理する', () => {
    const apiResponse = {
      total: 0,
      total_pages: 0,
      current_page: 1,
      data: [],
    };

    const result = toPaginatedBlogs(apiResponse);

    expect(result).toEqual({
      total: 0,
      totalPages: 0,
      currentPage: 1,
      blogs: [],
    });
  });
});
