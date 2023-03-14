'use client';
import { useSession, signOut } from 'next-auth/react';


import Image from 'next/image';
import Link from 'next/link';
export default function NavBar() {
  const { data: session } = useSession();
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 container mx-auto'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/logo.svg'
            width={40}
            height={40}
            className='h-6 mr-3 sm:h-9'
            alt='Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            gju-upholders
          </span>
        </Link>
        <div className='flex items-center md:order-2'>
          <button
            type='button'
            className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
            id='user-menu-button'
            aria-expanded='false'
            data-dropdown-toggle={'userDropdown'}
            data-dropdown-placement='bottom'
          >
            <span className='sr-only'>Open user menu</span>
          </button>
          {session?.user ? (
            <>
              <button
                id='dropdownAvatarNameButton'
                data-dropdown-toggle='dropdownAvatarName'
                className='flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white'
                type='button'
                onClick={() =>
                  document
                    .getElementById('dropdownAvatarName')
                    .classList.toggle('hidden')
                }
              >
                <span className='sr-only'>Open user menu</span>
                <Image
                  className='w-8 h-8 mr-2 rounded-full'
                  src='/user/user.png'
                  alt='user photo'
                  width={50}
                  height={50}
                />
                {session.user.name}
                <svg
                  className='w-4 h-4 mx-1.5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
              <div
                id='dropdownAvatarName'
                className='z-15 hidden absolute top-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
              >
                {/* <div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
              <div className='font-medium '>Pro User</div>
              <div className='truncate'>name@flowbite.com</div>
            </div> */}
                <ul
                  className='py-2 text-sm text-gray-700 dark:text-gray-200'
                  aria-labelledby='dropdownInformdropdownAvatarNameButtonationButton'
                >
                  <li>
                    <Link
                      href='/user/dashboard/'
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
                <div className='py-2'>
                  <Link
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    onClick={signOut}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <Link
              href={'/user/login'}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Get started
            </Link>
          )}
          <button
            data-collapse-toggle='mobile-menu-2'
            type='button'
            className='inline-flex items-center p-2 ml-1 text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mobile-menu-2'
            aria-expanded='false'
            onClick={() =>
              document
                .getElementById('mobile-menu-2')
                .classList.toggle('hidden')
            }
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='mobile-menu-2'
        >
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                href='#'
                className='block py-2 pl-3 pr-4 text-white bg-blue-700
                rounded md:bg-transparent md:text-blue-700 md:p-0
                dark:text-white'
                aria-current='page'
              >
                {' '}
                Home
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded
                hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700
                md:p-0 dark:text-gray-400 md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent dark:border-gray-700'
              >
                {' '}
                About
              </Link>
            </li>
            <li>
              <Link
                href='/blogs'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded
                hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700
                md:p-0 dark:text-gray-400 md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent dark:border-gray-700'
              >
                {' '}
                Blog
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded
                hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700
                md:p-0 dark:text-gray-400 md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent dark:border-gray-700'
              >
                {' '}
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
