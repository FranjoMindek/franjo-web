import {Poppins} from 'next/font/google'
import '../styles/globals.scss'
import {ReactNode} from "react";
import MainHeader from "@/components/Header/MainHeader";
import Footer from "@/components/Footer/Footer";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

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
      <body className={`${poppins.className} min-h-screen w-full`}>
        <main className={'w-full min-h-screen flex flex-col justify-start items-center'}>
          <MainHeader/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
