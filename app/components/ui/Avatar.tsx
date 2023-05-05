'use client';

import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <div className="relative rounded-full overflow-hidden w-8 h-8">
      <Image
        className="absolute inset-0 object-cover w-full h-full"
        height="30"
        width="30"
        alt="Avatar"
        src={src || '/avatar-placeholder.jpg'}
      />
      ;
    </div>
  );
};

export default Avatar;
