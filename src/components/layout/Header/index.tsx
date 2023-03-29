import { NewspaperIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { Heading } from '../Heading';

export function Header() {
  return (
    <header className='flex flex-row w-full py-2 px-4 justify-between'>
      <Link
        href='/'
        className='flex flex-row gap-2 justify-center items-center'
      >
        <NewspaperIcon className='text-purple-600 h-12' />
        <Heading size='large'>Next Blog</Heading>
      </Link>
      <nav className='flex flex-row text-medium items-center justify-end gap-4'>
        <Link href='/'>Home</Link>
        <Link href='/latest'>Últimos posts</Link>
        <Link href='/most-read'>Mais lidos</Link>
      </nav>
    </header>
  );
}
