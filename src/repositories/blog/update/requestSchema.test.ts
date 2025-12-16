import { describe, expect, it } from 'vitest';
import { requestSchema, toApiRequest } from './requestSchema';

describe('requestSchema', () => {
  it('valid data を受け入れる', () => {
    const validData = {
      title: 'Updated Blog',
      content: 'Updated content',
    };

    const result = requestSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('必須フィールドが不足している場合は失敗する', () => {
    const invalidData = {
      title: 'Updated Blog',
    };

    const result = requestSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('toApiRequest が入力をそのまま返す', () => {
    const input = {
      title: 'Updated Blog',
      content: 'Updated content',
    };

    const result = toApiRequest(input);
    expect(result).toEqual(input);
  });
});
