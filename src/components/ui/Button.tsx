'use client';

import { useFormStatus } from 'react-dom';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled,
  className = '',
}: ButtonProps) {
  const { pending } = useFormStatus();
  const isDisabled = disabled || pending;

  const baseStyles =
    'px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {pending ? '処理中...' : children}
    </button>
  );
}
