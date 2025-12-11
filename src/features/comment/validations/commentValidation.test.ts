import { commentSchema } from './commentValidation';
import { describe, it, expect } from 'vitest';

describe('commentSchema', () => {
  describe('正常系', () => {
    it('有効なコメントを受け入れる', () => {
      const input = {
        content: 'テストコメントです。',
      };
      const result = commentSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    it('最大文字数のコメントを受け入れる', () => {
      const input = {
        content: 'a'.repeat(1000),
      };
      const result = commentSchema.safeParse(input);
      expect(result.success).toBe(true);
    });
  });

  describe('異常系', () => {
    describe('コメント', () => {
      it('空文字の場合はエラー', () => {
        const input = {
          content: '',
        };
        const result = commentSchema.safeParse(input);
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe('コメントは必須です');
        }
      });

      it('1000文字を超える場合はエラー', () => {
        const input = {
          content: 'a'.repeat(1001),
        };
        const result = commentSchema.safeParse(input);
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe('コメントは1000文字以内で入力してください');
        }
      });
    });
  });
});
