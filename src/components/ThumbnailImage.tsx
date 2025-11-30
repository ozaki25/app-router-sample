import React from 'react';
import clsx from 'clsx';

type ThumbnailImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const ThumbnailImage: React.FC<ThumbnailImageProps> = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={clsx('rounded-md w-full h-40 object-cover', className)}
    style={{ backgroundColor: 'var(--color-bg-thumbnail)' }}
  />
);
// ...existing code (from src/app/components/ThumbnailImage.tsx)...
