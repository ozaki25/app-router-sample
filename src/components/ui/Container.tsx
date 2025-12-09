type Props = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
};

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  full: 'max-w-full',
};

export function Container({ children, maxWidth }: Props) {
  const maxWidthClass = maxWidth ? maxWidthClasses[maxWidth] : '';
  const containerClass = maxWidth ? `${maxWidthClass} mx-auto` : '';

  return (
    <main className="container mx-auto px-4 py-8">
      {maxWidth ? <div className={containerClass}>{children}</div> : children}
    </main>
  );
}
