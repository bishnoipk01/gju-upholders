'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = async () => {
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/',
    });
  };
  return (
    <section className='bg-slate-200 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-full'>
        <Link
          href='#'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <Image
            className='w-8 h-8 mr-2'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
            alt='logo'
            width={100}
            height={100}
          />
          gju-upholders
        </Link>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <form
              className='space-y-4 md:space-y-6'
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='username@host.com'
                  required=''
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required=''
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='flex items-center justify-between'>
                <Link
                  href='#'
                  className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Sign in
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don’t have an account yet?{' '}
                <Link
                  href='/user/register'
                  className='font-medium text-blue-600 hover:underline dark:text-primary-500'
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
