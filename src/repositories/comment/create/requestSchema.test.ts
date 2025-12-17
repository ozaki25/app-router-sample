import { describe, expect, it } from 'vitest';
import { toApiRequest } from './requestSchema';

describe('requestSchema', () => {
  it('toApiRequest がAPI用の形式に変換する', () => {
    const input = {
      blogId: '1',
      content: 'Test comment',
    };

    const result = toApiRequest(input);
    expect(result).toEqual({ blog_id: '1', content: 'Test comment' });
  });
});
