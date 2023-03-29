import { ReactNode } from 'react';
import { Roboto } from 'next/font/google';

import { Header } from '@src/components/layout/Header';

import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin-ext']
});

export const metadata = {
  title: 'Next Blog',
  description: 'Blog built with Next.js'
};

export interface RootLayoutProps {
  children: ReactNode;
}

/**
 * Base layout for all pages.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pt-BR' className={roboto.className}>
      <body>
        <Header />
        <main className='max-w-7xl mx-auto mt-4'>{children}</main>
      </body>
    </html>
  );
}
