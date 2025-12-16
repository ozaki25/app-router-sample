import { describe, expect, it } from 'vitest';
import { blogSchema } from './blogValidation';

describe('blogSchema', () => {
  describe('正常系', () => {
    it('有効なタイトルと本文を受け入れる', () => {
      const input = {
        title: 'テストタイトル',
        content: 'テスト本文です。',
      };
      const result = blogSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    it('最大文字数のタイトルと本文を受け入れる', () => {
      const input = {
        title: 'a'.repeat(100),
        content: 'b'.repeat(10000),
      };
      const result = blogSchema.safeParse(input);
      expect(result.success).toBe(true);
    });
  });

  describe('異常系', () => {
    describe('タイトル', () => {
      it('空文字の場合はエラー', () => {
        const input = {
          title: '',
          content: 'テスト本文',
        };
        const result = blogSchema.safeParse(input);
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe('タイトルは必須です');
        }
      });

      it('100文字を超える場合はエラー', () => {
        const input = {
          title: 'a'.repeat(101),
          content: 'テスト本文',
        };
        const result = blogSchema.safeParse(input);
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe('タイトルは100文字以内で入力してください');
        }
      });
    });

    describe('本文', () => {
      it('空文字の場合はエラー', () => {
        const input = {
          title: 'テストタイトル',
          content: '',
        };
        const result = blogSchema.safeParse(input);
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe('本文は必須です');
        }
      });

      it('10000文字を超える場合はエラー', () => {
        const input = {
          title: 'テストタイトル',
          content: 'a'.repeat(10001),
        };
        const result = blogSchema.safeParse(input);
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe('本文は10000文字以内で入力してください');
        }
      });
    });

    describe('複数エラー', () => {
      it('タイトルと本文が両方空の場合は複数エラーを返す', () => {
        const input = {
          title: '',
          content: '',
        };
        const result = blogSchema.safeParse(input);
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues.length).toBe(2);
        }
      });
    });
  });
});
