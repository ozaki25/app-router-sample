import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-20 h-20',
};

export const Avatar: FC<Props> = ({ src, alt, size = 'md', className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx('rounded-full border border-gray-200 object-cover', sizeMap[size], className)}
      style={{ backgroundColor: 'var(--color-bg-avatar)' }}
    />
  );
};
