'use client'

import {navigationRoutes} from "@/constants/routes";
import Link from "next/link";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import React, {useState} from "react";
import Image from "next/image";
import {usePathname} from "next/navigation";
import MenuOpen from '@img/menu-open.svg';
import MenuClosed from '@img/menu-closed.svg';
import Signature from '@img/signature.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const onToggle = () => setIsOpen(state => !state);
  const onNavigate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    if (pathname === path) {
      e.preventDefault()
      onToggle();
    }
  }

  return (
    <>
      <button className={'lg:hidden fixed top-4 right-4 z-10 fill-coffee'} onClick={onToggle}>
        {isOpen
          ? <MenuOpen/>
          : <MenuClosed/>
        }
      </button>
      <div className={
        `${isOpen || 'max-lg:hidden'} sticky top-0 left-0 max-lg:w-screen max-lg:h-screen max-lg:fixed ` +
        'max-h-screen flex flex-col items-center p-8 py-12 basis-[max(326px,25%)] shrink-0 bg-cappuccino'}>
        <div className={'flex flex-col items-center justify-between flex-grow'}>
          {/* Headline */}
          <Link className={'flex flex-col items-center'} href={'/'}>
            <Signature className={'fill-coffee'} width={213} height={71}/>
          </Link>
          {/* Nav */}
          <nav className={'flex-grow flex flex-col justify-center'}>
            <ul className={'flex flex-col items-center gap-4'}>
              {navigationRoutes.map(link =>
                <li key={link.path}>
                  <Link href={link.path} className={`text-2xl uppercase  ${pathname === link.path ? 'font-bold' : 'font-[500]'}`}
                        onClick={(e) => onNavigate(e, link.path)}>
                    {link.name} 
                  </Link>
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
