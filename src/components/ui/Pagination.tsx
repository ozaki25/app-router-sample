import { generatePageNumbers } from '@/libs/shared/pagination';
import Link from 'next/link';

type ActiveButtonProps = {
  nextPage: number;
  text: string;
  onPageChange?: (page: number) => void;
};

function ActiveButton({ nextPage, text, onPageChange }: ActiveButtonProps) {
  if (onPageChange) {
    return (
      <button
        onClick={() => onPageChange(nextPage)}
        className="px-3 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {text}
      </button>
    );
  }

  return (
    <Link
      href={`/blogs?page=${nextPage}`}
      className="px-3 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      scroll={true}
    >
      {text}
    </Link>
  );
}

type DisabledButtonProps = {
  text: string;
};

function DisabledButton({ text }: DisabledButtonProps) {
  return (
    <span className="px-3 py-2 rounded border border-gray-300 text-gray-400 cursor-not-allowed">
      {text}
    </span>
  );
}

function Ellipsis() {
  return <span className="px-2 text-gray-500">...</span>;
}

type CurrentPageProps = {
  page: number;
};

function CurrentPage({ page }: CurrentPageProps) {
  return (
    <span className="px-3 py-2 rounded bg-blue-600 text-white font-medium" aria-current="page">
      {page}
    </span>
  );
}

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const pages = generatePageNumbers(currentPage, totalPages);
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav aria-label="ページネーション" className="flex items-center justify-center gap-2">
      {hasPrevious ? (
        <ActiveButton nextPage={currentPage - 1} text="前へ" onPageChange={onPageChange} />
      ) : (
        <DisabledButton text="前へ" />
      )}
      <div className="flex items-center gap-1">
        {pages.map((page, index) =>
          page === 'ellipsis' ? (
            <Ellipsis key={`ellipsis-${index}`} />
          ) : page === currentPage ? (
            <CurrentPage key={page} page={page} />
          ) : (
            <ActiveButton
              key={page}
              nextPage={page}
              text={String(page)}
              onPageChange={onPageChange}
            />
          )
        )}
      </div>
      {hasNext ? (
        <ActiveButton nextPage={currentPage + 1} text="次へ" onPageChange={onPageChange} />
      ) : (
        <DisabledButton text="次へ" />
      )}
    </nav>
  );
}
