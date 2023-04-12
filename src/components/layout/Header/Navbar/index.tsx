'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={clsx(
        'flex flex-row items-center justify-end relative',
        'md:justify-center'
      )}
    >
      <button
        onClick={() => {
          setIsMenuOpen(prevState => !prevState);
        }}
        className='block md:hidden'
      >
        {isMenuOpen ? (
          <XMarkIcon title='Close menu' className='w-10' />
        ) : (
          <Bars3Icon title='Open menu' className='w-10' />
        )}
      </button>
      <div
        className={clsx(
          'flex gap-4 bg-white flex-col absolute top-full w-screen -right-4',
          'md:flex-row md:justify-center md:items-center md:static md:w-auto',
          {
            'hidden': !isMenuOpen,
            'md:flex': isMenuOpen
          }
        )}
      >
        <Link href='/'>Home</Link>
        <Link href='/latest'>Últimos posts</Link>
        <Link href='/most-read'>Mais lidos</Link>
      </div>
    </nav>
  );
}
