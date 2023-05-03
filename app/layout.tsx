import ClientOnly from './components/ClientOnly';
import Navigation from './components/navigation/Navigation';
import RegisterModal from './components/modals/RegisterModal';

import './globals.css';

import { Nunito, Inter } from 'next/font/google';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import Providers from './providers/Providers';

const font = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Code Wars - Next Tailwind',
  description: 'App build with next 13, tailwind, prisma',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Providers>
            <RegisterModal />
            <LoginModal />
            <Navigation currentUser={currentUser} />
          </Providers>
        </ClientOnly>
        <main className="flex min-h-screen  flex-col items-center justify-between pt-[60px]">{children}</main>
      </body>
    </html>
  );
}
