import Image from 'next/image';

export function NextLogo() {
  return (
    <div className="inline-flex gap-4 p-2 bg-[#81878d]">
      <Image src="/next.png" alt="Next.js PNG" height={24} width={120} className="block" />
      <Image src="/next.svg" alt="Next.js SVG" height={24} width={120} className="block" />
    </div>
  );
}
