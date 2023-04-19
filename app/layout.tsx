import ClientOnly from './components/ClientOnly';
import Navigation from './components/Navigation';
import RegisterModal from './components/modals/RegisterModal';

import './globals.css';

import { Nunito } from 'next/font/google';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Code Wars - Next Tailwind',
  description: 'App build with next 13, tailwind, prisma',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navigation />
        </ClientOnly>
        <main className="flex min-h-screen  flex-col items-center justify-between px-4 pt-[70px]">
          <div className="z-10 w-full items-center justify-between text-sm lg:flex">{children}</div>
        </main>
      </body>
    </html>
  );
}
