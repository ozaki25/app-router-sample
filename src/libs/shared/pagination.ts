import { PAGINATION_ELLIPSIS_THRESHOLD, PAGINATION_SIBLING_COUNT } from '@/constants/pagination';

export function generatePageNumbers(
  currentPage: number,
  totalPages: number
): (number | 'ellipsis')[] {
  // 総ページ数が閾値以下の場合は全て表示
  if (totalPages <= PAGINATION_ELLIPSIS_THRESHOLD) {
    return [...Array(totalPages)].map((_, index) => index + 1);
  }

  const pages: (number | 'ellipsis')[] = [];
  const leftSiblingIndex = Math.max(currentPage - PAGINATION_SIBLING_COUNT, 1);
  const rightSiblingIndex = Math.min(currentPage + PAGINATION_SIBLING_COUNT, totalPages);

  // 最初のページは常に表示
  pages.push(1);

  // 左側の省略記号
  if (leftSiblingIndex > 2) {
    pages.push('ellipsis');
  }

  // 現在のページ周辺
  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    if (i !== 1 && i !== totalPages) {
      pages.push(i);
    }
  }

  // 右側の省略記号
  if (rightSiblingIndex < totalPages - 1) {
    pages.push('ellipsis');
  }

  // 最後のページは常に表示
  pages.push(totalPages);

  return pages;
}
