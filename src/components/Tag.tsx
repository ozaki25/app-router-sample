import React from 'react';
import clsx from 'clsx';

type TagProps = {
  label: string;
  className?: string;
};

export const Tag: React.FC<TagProps> = ({ label, className }) => (
  <span
    className={clsx(
      'inline-block px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium',
      className
    )}
  >
    {label}
  </span>
);
// ...existing code (from src/app/components/Tag.tsx)...
