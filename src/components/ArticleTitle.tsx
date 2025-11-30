import { FC } from 'react';
import clsx from 'clsx';

type Props = {
  title: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeMap = {
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-3xl',
};

export const ArticleTitle: FC<Props> = ({ title, size = 'md', className }) => {
  return (
    <h2 className={clsx('font-bold text-[color:var(--title)]', sizeMap[size], className)}>
      {title}
    </h2>
  );
};
