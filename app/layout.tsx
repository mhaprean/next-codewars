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

        {children}
      </body>
    </html>
  );
}
