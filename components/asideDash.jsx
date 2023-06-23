import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function AsideDash({ active }) {
  const { data: session } = useSession();
  return (
    <div className='relative w-[9rem] h-[87vh] '>
      <nav className='z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 lg:left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border'>
        <Link
          href='/user/dashboard'
          className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5  dark:bg-sky-900 dark:text-sky-50 ${
            active == 'dashboard' ? 'bg-indigo-50 text-indigo-600' : ''
          }`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 shrink-0'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
            />
          </svg>
          <small className='text-center text-sm font-medium'> Profile </small>
        </Link>
        <Link
          href='/user/dashboard/questions'
          className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 ${
            active == 'questions' ? 'bg-indigo-50 text-indigo-600' : ''
          }`}
        >
          {/* HeroIcon - Chart Bar */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 shrink-0'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
            />
          </svg>
          <small className='text-center text-sm font-medium'> Questions </small>
        </Link>
        <Link
          href='/user/dashboard/posts'
          className='flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800'
        >
          {/* HeroIcon - Cog-6-tooth */}
          <svg
            className='w-12 h-12 shrink-0'
            stroke='currentColor'
            viewBox='0 0 52 52'
          >
            <polygon
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
              points='29 13 14 29 25 29 23 39 38 23 27 23'
            />
          </svg>
          <small className='text-center text-sm font-medium'> Posts </small>
        </Link>
        <hr className='dark:border-gray-700/60' />
        <button
          className='flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 dark:text-gray-400'
          onClick={() => signOut()}
        >
          {/* HeroIcon - Home Modern */}
          <Image src={'/exit-icon.svg'} height={25} width={25} alt='' />
          <small className='text-sm font-medium'>Logout</small>
        </button>
      </nav>
    </div>
  );
}
