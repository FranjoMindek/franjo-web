import {Poppins} from 'next/font/google'
import '../styles/globals.scss'
import {ReactNode} from "react";
import Navigation from "@/components/Navigation";
import { GoogleTagManager  } from '@next/third-parties/google'

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
      <head>
        <meta name="google-site-verification" content="ntejZMO3jhEGTh8CNbdQ8piqlXt2n53vxjo6ATyCiyk"/>
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!}/>
      <body className={`${poppins.className} w-screen min-h-[100dvh] flex flex-row items-stretch text-coffee bg-offwhite text-lg`}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
