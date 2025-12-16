import { describe, expect, it } from 'vitest';
import { formatDate } from './date';

describe('formatDate', () => {
  it('ISO形式の日付文字列を YYYY/MM/DD HH:mm 形式にフォーマットする', () => {
    const input = '2025-12-09T10:30:00Z';
    const result = formatDate(input);
    expect(result).toBe('2025/12/09 19:30');
  });
});
