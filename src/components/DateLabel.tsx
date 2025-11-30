import React from 'react';

type DateLabelProps = {
  date: string;
  className?: string;
};

export const DateLabel: React.FC<DateLabelProps> = ({ date, className }) => {
  const d = new Date(date);
  const formatted = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`;
  return <span className={className}>{formatted}</span>;
};
// ...existing code (from src/app/components/DateLabel.tsx)...
