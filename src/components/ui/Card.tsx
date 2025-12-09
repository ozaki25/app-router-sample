type Props = {
  children: React.ReactNode;
};

export function Card({ children }: Props) {
  return <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">{children}</div>;
}

type CardHeaderProps = {
  children: React.ReactNode;
};

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="mb-4">{children}</div>;
}

type CardBodyProps = {
  children: React.ReactNode;
};

export function CardBody({ children }: CardBodyProps) {
  return <div>{children}</div>;
}

type CardFooterProps = {
  children: React.ReactNode;
};

export function CardFooter({ children }: CardFooterProps) {
  return <div className="mt-4 pt-4 border-t border-gray-200">{children}</div>;
}
