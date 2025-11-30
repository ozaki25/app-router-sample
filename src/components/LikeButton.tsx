import React from 'react';
import clsx from 'clsx';

type LikeButtonProps = {
  liked: boolean;
  count: number;
  onClick: () => void;
  className?: string;
};

export const LikeButton: React.FC<LikeButtonProps> = ({ liked, count, onClick, className }) => (
  <button
    className={clsx(
      'flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 text-sm font-medium transition-colors',
      liked ? 'bg-pink-100 text-pink-600 border-pink-300' : 'bg-white text-gray-700',
      'hover:bg-pink-50',
      className
    )}
    onClick={onClick}
    aria-pressed={liked}
  >
    <span aria-hidden>♥</span>
    <span>{count}</span>
  </button>
);
// ...existing code (from src/app/components/LikeButton.tsx)...
