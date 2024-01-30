'use client'

import Image from "next/image";
import {useState} from "react";
import routes, {headerLinks} from "@/constants/routes";
import Link from "next/link";


export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  headerLinks

  const source = isOpen
    ? 'img/menu-open.svg'
    : 'img/menu-closed.svg';

  return (
    <>
      <button className={'relative flex flex-col items-center z-10'}
              onClick={() => setIsOpen(state => !state)}>
        <Image src={source} alt={'Menu icon'} width={24} height={24}/>
      </button>
      {isOpen &&
        <nav className={'w-screen h-screen absolute top-0 left-0 bg-yellow-50 px-6 py-10 flex flex-col justify-center'}>
          {headerLinks.map(link =>
            <Link key={link.path} href={link.path}>{link.name}</Link>
          )}
        </nav>
      }
    </>
  )
}

