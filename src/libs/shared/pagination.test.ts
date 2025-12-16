import { describe, expect, it } from 'vitest';
import { generatePageNumbers } from './pagination';

describe('generatePageNumbers', () => {
  it('総ページ数が1の場合、[1]を返す', () => {
    expect(generatePageNumbers(1, 1)).toEqual([1]);
  });

  it('総ページ数が閾値以下の場合、全てのページ番号を返す', () => {
    expect(generatePageNumbers(1, 3)).toEqual([1, 2, 3]);
    expect(generatePageNumbers(2, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(generatePageNumbers(4, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('最初のページで省略記号が表示される', () => {
    expect(generatePageNumbers(1, 10)).toEqual([1, 2, 'ellipsis', 10]);
  });

  it('2ページ目で省略記号が表示される', () => {
    expect(generatePageNumbers(2, 10)).toEqual([1, 2, 3, 'ellipsis', 10]);
  });

  it('中間ページで両側に省略記号が表示される', () => {
    expect(generatePageNumbers(5, 10)).toEqual([1, 'ellipsis', 4, 5, 6, 'ellipsis', 10]);
  });

  it('最後から2番目のページで省略記号が表示される', () => {
    expect(generatePageNumbers(9, 10)).toEqual([1, 'ellipsis', 8, 9, 10]);
  });

  it('最後のページで省略記号が表示される', () => {
    expect(generatePageNumbers(10, 10)).toEqual([1, 'ellipsis', 9, 10]);
  });

  it('3ページ目で左側の省略記号が表示されない', () => {
    expect(generatePageNumbers(3, 10)).toEqual([1, 2, 3, 4, 'ellipsis', 10]);
  });

  it('8ページ目で右側の省略記号が表示されない', () => {
    expect(generatePageNumbers(8, 10)).toEqual([1, 'ellipsis', 7, 8, 9, 10]);
  });

  it('総ページ数が8の場合、閾値を超えて省略表示される', () => {
    expect(generatePageNumbers(1, 8)).toEqual([1, 2, 'ellipsis', 8]);
    expect(generatePageNumbers(4, 8)).toEqual([1, 'ellipsis', 3, 4, 5, 'ellipsis', 8]);
    expect(generatePageNumbers(8, 8)).toEqual([1, 'ellipsis', 7, 8]);
  });
});
