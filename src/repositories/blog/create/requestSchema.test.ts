import { requestSchema, toApiRequest } from './requestSchema';
import { describe, it, expect } from 'vitest';

describe('requestSchema', () => {
  it('valid data を受け入れる', () => {
    const validData = {
      title: 'Test Blog',
      content: 'Test content',
    };

    const result = requestSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('必須フィールドが不足している場合は失敗する', () => {
    const invalidData = {
      title: 'Test Blog',
    };

    const result = requestSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('toApiRequest が入力をそのまま返す', () => {
    const input = {
      title: 'Test Blog',
      content: 'Test content',
    };

    const result = toApiRequest(input);
    expect(result).toEqual(input);
  });
});
