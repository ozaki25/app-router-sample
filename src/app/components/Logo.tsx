import Image from 'next/image';

type Props = {
  src: string;
};

function Logo({ src }: Props) {
  return <Image src={src} alt="Next.js Logo" width={300} height={60} />;
}

export default Logo;
