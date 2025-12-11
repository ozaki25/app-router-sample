import { responseSchema, toComment, toPaginatedComments } from './responseSchema';
import { describe, it, expect } from 'vitest';

describe('responseSchema', () => {
  it('valid data を受け入れる', () => {
    const validData = {
      total: 2,
      total_pages: 1,
      current_page: 1,
      data: [
        {
          id: '1',
          blog_id: '10',
          content: 'テストコメント',
          created_at: '2025-12-11T12:00:00Z',
        },
        {
          id: '2',
          blog_id: '10',
          content: '2件目',
          created_at: '2025-12-11T12:01:00Z',
        },
      ],
    };
    const result = responseSchema.safeParse(validData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.total).toBe(2);
      expect(result.data.data.length).toBe(2);
      expect(result.data.data[0].id).toBe('1');
      expect(result.data.data[1].content).toBe('2件目');
    }
  });

  it('必須フィールドが不足・型不正の場合は失敗する', () => {
    const invalidData = {
      total: 2,
      total_pages: 1,
      current_page: 1,
      data: [
        {
          id: '1',
          blog_id: '10',
          content: 123, // content型不正
          created_at: '2025-12-11T12:00:00Z',
        },
        {
          id: '2',
          // blog_id欠落
          content: 'NG',
          created_at: '2025-12-11T12:01:00Z',
        },
      ],
    };
    const result = responseSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('toComment が snake_case から camelCase に変換する', () => {
    const apiResponse = {
      id: '1',
      blog_id: '10',
      content: 'テストコメント',
      created_at: '2025-12-11T12:00:00Z',
    };
    const comment = toComment(apiResponse);
    expect(comment).toEqual({
      id: '1',
      blogId: '10',
      content: 'テストコメント',
      createdAt: '2025-12-11T12:00:00Z',
    });
  });

  it('toPaginatedComments がページネーション情報を変換する', () => {
    const apiResponse = {
      total: 5,
      total_pages: 3,
      current_page: 2,
      data: [
        {
          id: '3',
          blog_id: '10',
          content: '3件目',
          created_at: '2025-12-11T12:02:00Z',
        },
        {
          id: '4',
          blog_id: '10',
          content: '4件目',
          created_at: '2025-12-11T12:03:00Z',
        },
      ],
    };
    const result = toPaginatedComments(apiResponse);
    expect(result).toEqual({
      total: 5,
      totalPages: 3,
      currentPage: 2,
      comments: [
        {
          id: '3',
          blogId: '10',
          content: '3件目',
          createdAt: '2025-12-11T12:02:00Z',
        },
        {
          id: '4',
          blogId: '10',
          content: '4件目',
          createdAt: '2025-12-11T12:03:00Z',
        },
      ],
    });
  });
});
