import { Open_Sans } from 'next/font/google';
import '../styles/globals.scss';
import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import { GoogleTagManager } from '@next/third-parties/google';

const openSans = Open_Sans({
  preload: true,
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='ntejZMO3jhEGTh8CNbdQ8piqlXt2n53vxjo6ATyCiyk'
        />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body
        className={`${openSans.className} flex min-h-[100dvh] w-screen flex-row items-stretch overflow-x-hidden bg-offwhite text-base text-coffee sm:text-lg`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
