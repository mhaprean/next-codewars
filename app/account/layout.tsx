import { notFound } from 'next/navigation';

import getCurrentUser from '../actions/getCurrentUser';

interface IAccountLayoutProps {
  children?: React.ReactNode;
}

export default async function AccountLayout({ children }: IAccountLayoutProps) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return notFound();
  }

  return <div className="flex flex-col space-y-6 w-full max-w-5xl">{children}</div>;
}
