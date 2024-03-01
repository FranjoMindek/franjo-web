'use client';

import { navigationRoutes } from '@/constants/routes';
import Link from 'next/link';
import SocialMedia from '@/components/SocialMedia';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MenuOpen from '@img/menu-open.svg';
import MenuClosed from '@img/menu-closed.svg';
import Signature from '@img/signature.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const onToggle = () => setIsOpen(state => !state);
  const onNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    if (pathname === path) {
      e.preventDefault();
      setIsOpen(false);
    }
  };
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <button
        className='fixed right-4 top-4 z-10 fill-coffee lg:hidden'
        aria-label='Menu button'
        onClick={onToggle}
      >
        {isOpen ? <MenuOpen /> : <MenuClosed />}
      </button>
      <div
        className={
          `${isOpen || 'max-lg:hidden'} sticky left-0 top-0 max-lg:fixed max-lg:h-screen max-lg:w-screen ` +
          'flex max-h-screen shrink-0 basis-[max(310px,25%)] flex-col items-center bg-cappuccino p-8 py-12'
        }
      >
        {/* Headline */}
        <Link
          className='flex flex-col items-center pb-4'
          href='/'
          aria-label='Navigate to home'
        >
          <Signature className='fill-coffee' width={213} height={71} />
        </Link>
        {/* Nav */}
        <nav className='flex flex-grow flex-col justify-center'>
          <ul className='flex flex-col items-center gap-6'>
            {navigationRoutes.map(link => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`group text-3xl uppercase ${pathname === link.path ? 'font-bold' : 'font-[500]'}`}
                  onClick={e => onNavigate(e, link.path)}
                >
                  {link.name}
                  <span className='block h-[3px] max-w-0 bg-coffee transition-all duration-500 group-hover:max-w-full max-lg:hidden'></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Footer */}
        <div className='flex flex-col gap-4 pt-4'>
          <SocialMedia />
          <span className='text-sm'>franjo.mindek@gmail.com @ 2024</span>
        </div>
      </div>
    </>
  );
};

export default Navigation;
