'use client';

import SocialMedia from '@/components/SocialMedia';
import { navigationRoutes } from '@/constants/routes';
import MenuClosed from '@img/menu-closed.svg';
import MenuOpen from '@img/menu-open.svg';
import Signature from '@img/signature.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { twJoin } from 'tailwind-merge';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const onToggle = useCallback(function onToggle() {
    setIsOpen(state => !state);
  }, []);
  const onNavigate = useCallback(
    function onNavigate(
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      path: string
    ) {
      if (pathname === path) {
        e.preventDefault();
        setIsOpen(false);
      }
    },
    [pathname]
  );

  return (
    <>
      <button
        className='fixed right-4 top-4 z-10 fill-coffee lg:hidden'
        aria-label='Menu button'
        onClick={onToggle}
      >
        {isOpen ? <MenuOpen /> : <MenuClosed />}
      </button>
      <aside
        className={twJoin(
          'sticky left-0 top-0 flex max-h-screen shrink-0 basis-[max(310px,25%)] flex-col items-center bg-cappuccino p-8 py-12 max-lg:fixed max-lg:h-screen max-lg:w-screen',
          !isOpen && 'max-lg:hidden'
        )}
      >
        {/* Logo */}
        <Link
          className='flex flex-col items-center'
          href='/'
          aria-label='Navigate to home'
        >
          <Signature className='fill-coffee' width={213} height={71} />
        </Link>
        {/* Nav */}
        <nav className='flex flex-grow flex-col items-center justify-center gap-6 py-4 sm:gap-8'>
          {navigationRoutes.map(link => (
            <Link
              key={link.name}
              href={link.path}
              className='text-3xl font-medium uppercase'
              onClick={e => onNavigate(e, link.path)}
            >
              {link.name}
              <span
                className={twJoin(
                  'block h-[3px] max-w-0 bg-coffee transition-all duration-500',
                  link.active(pathname) && 'max-w-full'
                )}
              />
            </Link>
          ))}
        </nav>
        {/* Footer */}
        <footer className='flex flex-col gap-6'>
          <SocialMedia />
          <div className='flex flex-col items-center gap-1'>
            <span className='text-sm'>franjo.mindek@gmail.com @ 2024</span>
            <span className='text-sm'>Jun, 2024</span>
          </div>
        </footer>
      </aside>
    </>
  );
}

export default React.memo(Navigation);
