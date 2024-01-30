'use client'

import {navigationRoutes} from "@/constants/routes";
import Link from "next/link";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import {useState} from "react";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const source = isOpen
    ? 'img/menu-open.svg'
    : 'img/menu-closed.svg';
  const hidden = isOpen
    ? ''
    : 'max-lg:hidden';


  return (
    <>
        <Image src={source} alt={'Menu icon'}
               width={34} height={34}
               className={'lg:hidden fixed top-4 right-4 cursor-pointer aria z-10'}
               onClick={() => setIsOpen(state => !state)}/>
      <div className={
        `${hidden} sticky top-0 left-0 max-lg:w-screen max-lg:h-screen max-lg:fixed `+
        'max-h-screen flex flex-col items-center p-8 py-12 basis-[max(326px,25%)] shrink-0 bg-cappuccino'}>
        <div className={'flex flex-col items-center justify-between flex-grow'}>
          {/* Image and headline */}
          {/* TODO: move to about? */}
          <div className={'max-lg:hidden flex flex-col items-center gap-4'}>
            <div className={'bg-placeholder w-48 h-48'}/>
            <p>Tekst kratki ili potpis</p>
          </div>
          {/* Nav */}
          <nav className={'flex-grow flex flex-col justify-center'}>
            <ul className={'flex flex-col items-center gap-4'}>
              {navigationRoutes.map(link =>
                <li key={link.path}>
                  <Link href={link.path} className={'text-2xl uppercase'}>{link.name}</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        {/* Footer */}
        <div className={'flex flex-col gap-4 pt-8'}>
          <SocialMedia/>
          <span className={'text-sm'}>franjo.mindek@gmail.com @ 2024</span>
        </div>
      </div>
    </>
  )
}

export default Navigation;
