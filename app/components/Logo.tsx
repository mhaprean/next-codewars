'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Link href={'/'}>
      <Image alt="Logo" className="cursor-pointer" height={'40'} width={'40'} src={'/codewars-logo.png'} />
    </Link>
  );
};

export default Logo;
