import { describe, expect, it } from 'vitest';
import { responseSchema, toBlog } from './responseSchema';

describe('responseSchema', () => {
  it('valid data を受け入れる', () => {
    const validData = {
      id: '1',
      title: 'Updated Blog',
      content: 'Updated content',
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-02T00:00:00Z',
    };

    const result = responseSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('必須フィールドが不足している場合は失敗する', () => {
    const invalidData = {
      id: '1',
      title: 'Updated Blog',
    };

    const result = responseSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('toBlog が snake_case から camelCase に変換する', () => {
    const apiResponse = {
      id: '1',
      title: 'Updated Blog',
      content: 'Updated content',
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-02T00:00:00Z',
    };

    const blog = toBlog(apiResponse);

    expect(blog).toEqual({
      id: '1',
      title: 'Updated Blog',
      content: 'Updated content',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-02T00:00:00Z',
    });
  });
});
