'use client';

import { useEffect, useState } from 'react';

interface IPropsClientOnly {
  children: React.ReactNode;
}

const ClientOnly = ({ children }: IPropsClientOnly) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
