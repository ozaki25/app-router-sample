import Link from 'next/link';
import { ReactNode } from 'react';

const baseStyles = 'inline-block font-medium rounded transition-colors';

const variantStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-8 py-3 text-lg shadow-md hover:shadow-lg',
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

export function LinkButton({ href, children, variant = 'primary', size = 'md' }: Props) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}>
      {children}
    </Link>
  );
}
