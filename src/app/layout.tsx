import {Poppins} from 'next/font/google'
import '../styles/globals.scss'
import {ReactNode} from "react";
import Navigation from "@/components/Navigation/Navigation";

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
    {/*<head>*/}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/*<Suspense>*/}
      {/*  <Analytics/>*/}
      {/*</Suspense>*/}
    {/*</head>*/}
      <body className={`${poppins.className} w-full min-h-screen flex flex-row items-stretch text-coffee`}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
