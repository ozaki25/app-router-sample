type PageHeaderProps = {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function PageHeader({
  title,
  description,
  align = 'left',
  className = '',
}: PageHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : '';
  const titleSize = align === 'center' ? 'text-4xl' : 'text-3xl';

  return (
    <div className={`mb-8 ${alignClass} ${className}`}>
      <h1 className={`${titleSize} font-bold text-gray-900 mb-2`}>{title}</h1>
      {description && (
        <p className={`text-gray-600 ${align === 'center' ? 'text-xl' : ''}`}>{description}</p>
      )}
    </div>
  );
}
