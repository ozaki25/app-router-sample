import React from 'react';
import clsx from 'clsx';

type CommentBoxProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const CommentBox: React.FC<CommentBoxProps> = ({ value, onChange, className }) => (
  <textarea
    className={clsx(
      'focus:ring-primary min-h-[80px] w-full rounded-md border border-gray-300 p-2 text-gray-800 focus:ring-2 focus:outline-none',
      className
    )}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="コメントを入力..."
    style={{ backgroundColor: 'var(--color-bg-comment)' }}
  />
);
// ...existing code (from src/app/components/CommentBox.tsx)...
