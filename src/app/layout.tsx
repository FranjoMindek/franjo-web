import {Poppins} from 'next/font/google'
import '../styles/globals.scss'
import {ReactNode} from "react";
import Navigation from "@/components/Navigation/Navigation";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  preload: true,
  subsets: ['devanagari', 'latin', 'latin-ext'],
  variable: '--font-poppins',
})

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full min-h-screen flex flex-row items-stretch text-coffee`}>
        <Navigation/>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  )
}
