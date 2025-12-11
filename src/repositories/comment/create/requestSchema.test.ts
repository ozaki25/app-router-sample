import { requestSchema, toApiRequest } from './requestSchema';
import { describe, it, expect } from 'vitest';

describe('requestSchema', () => {
  it('valid data を受け入れる', () => {
    const validData = {
      blogId: '1',
      content: 'Test comment',
    };

    const result = requestSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('必須フィールドが不足している場合は失敗する', () => {
    const invalidData = {
      blogId: '1',
    };

    const result = requestSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('toApiRequest がAPI用の形式に変換する', () => {
    const input = {
      blogId: '1',
      content: 'Test comment',
    };

    const result = toApiRequest(input);
    expect(result).toEqual({ blog_id: '1', content: 'Test comment' });
  });
});
