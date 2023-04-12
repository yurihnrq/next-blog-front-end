import { NewspaperIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { Heading } from '../Heading';

import { Navbar } from './Navbar';

export function Header() {
  return (
    <header
      className={'flex flex-row w-full py-2 px-4 justify-between relative'}
    >
      <Link
        href='/'
        className='flex flex-row gap-2 justify-center items-center'
      >
        <NewspaperIcon className='text-purple-600 h-12' />
        <Heading size='large' className='whitespace-nowrap'>
          Next Blog
        </Heading>
      </Link>
      <Navbar />
    </header>
  );
}
