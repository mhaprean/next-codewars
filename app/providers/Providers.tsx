'use client';

import { ThemeProvider } from 'next-themes';
import ToasterProvider from './ToasterProvider';

interface IPropsProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IPropsProviders) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <ToasterProvider />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
