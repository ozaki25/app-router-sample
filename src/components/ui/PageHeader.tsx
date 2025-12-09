type Props = {
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function PageHeader({ title, description, align = 'left' }: Props) {
  const alignClass = align === 'center' ? 'text-center' : '';
  const titleSize = align === 'center' ? 'text-4xl' : 'text-3xl';

  return (
    <div className={`mb-8 ${alignClass}`}>
      <h1 className={`${titleSize} font-bold text-gray-900 mb-2`}>{title}</h1>
      {description && (
        <p className={`text-gray-600 ${align === 'center' ? 'text-xl' : ''}`}>{description}</p>
      )}
    </div>
  );
}
