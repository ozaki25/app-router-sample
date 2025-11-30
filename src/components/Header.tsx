import React from 'react';
import clsx from 'clsx';

type HeaderProps = {
  title?: string;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ title = 'youScene', className }) => (
  <header
    className={clsx('bg-primary w-full px-6 py-4 text-xl font-bold text-white shadow', className)}
  >
    {title}
  </header>
);
// ...existing code (from src/app/components/Header.tsx)...
