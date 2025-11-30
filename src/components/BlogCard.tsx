import { FC } from 'react';
import clsx from 'clsx';
import { Avatar } from './Avatar';
import { DateLabel } from './DateLabel';
import { Tag } from './Tag';

type Props = {
  title: string;
  author: string;
  authorIcon: string;
  date: string;
  tags: string[];
  thumbnail: string;
  className?: string;
};

export const BlogCard: FC<Props> = ({
  title,
  author,
  authorIcon,
  date,
  tags,
  thumbnail,
  className,
}) => (
  <div
    className={clsx(
      'flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md',
      className
    )}
  >
    <img
      src={thumbnail}
      alt={title}
      className="h-40 w-full rounded-md object-cover"
      style={{ backgroundColor: 'var(--color-bg-thumbnail)' }}
    />
    <div className="flex items-center gap-3">
      <Avatar src={authorIcon} alt={author} size="sm" />
      <span className="font-semibold text-gray-800">{author}</span>
      <DateLabel date={date} />
    </div>
    <div className="text-lg font-bold text-gray-900">{title}</div>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  </div>
);
