import { PAGE_SIZE } from '@/constants/pagination';

type Props = {
  currentPage: number;
  total: number;
};

export function PaginationInfo({ currentPage, total }: Props) {
  const startIndex = (currentPage - 1) * PAGE_SIZE + 1;
  const endIndex = Math.min(currentPage * PAGE_SIZE, total);

  return (
    <div className="text-sm text-gray-600">
      {startIndex}-{endIndex}件目 / 全{total}件
    </div>
  );
}
