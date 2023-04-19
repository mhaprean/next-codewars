'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Link href={'/'} className="flex-shrink-0">
      <Image alt="Logo" className="cursor-pointer w-10 h-10" height={'40'} width={'40'} src={'/codewars-logo.png'} />
    </Link>
  );
};

export default Logo;
