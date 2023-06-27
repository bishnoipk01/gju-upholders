'use client';
import { useSession, signOut } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';
import Header from './header';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const { data: session } = useSession();
  const [avatar, setAvatar] = useState('default.png');

  const getAvatar = async () => {
    try {
      if (session) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/get-user`,
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({ uid: session.user.id }),
          }
        );
        const data = await res.json();
        setAvatar(data.data.avatar);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    console.log('getAvatar');
    getAvatar();
  });
  return (
    <nav className=' px-2 sm:px-4 py-3.5 rounded  bg-gradient-to-tr  bg-opacity-60 backdrop-blur-md  shadow-md  sticky bg-white z-10'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/logo.png'
            width={40}
            height={40}
            className='h-6 mr-3 sm:h-9'
            alt='Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap uppercase'>
            gju-upholders
          </span>
        </Link>
        <div className='flex items-center md:order-2'>
          {session?.user ? (
            <>
              <Link
                className=' flex items-center text-sm font-medium text-gray-900 rounded-full  hover:scale-[.98] transition'
                href={'/user/dashboard/questions/'}
              >
                <Image
                  className='w-8 h-8 mr-2 rounded-full'
                  src={`/users/${avatar}`}
                  alt='user photo'
                  width={50}
                  height={50}
                />
                <span className='font-semibold text-base space-x-2 text-gray-800 hover:text-gray-600'>
                  {session.user.name}
                </span>
              </Link>
            </>
          ) : (
            <a
              href={'/user/register'}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Get started
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
