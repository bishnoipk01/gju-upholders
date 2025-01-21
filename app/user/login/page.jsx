'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

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
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-white mb-4">
          Welcome Back
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Login to your account to continue
        </p>

        {/* Login Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-6"
        >
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:ring-teal-500 focus:border-teal-500 p-3 placeholder-gray-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:ring-teal-500 focus:border-teal-500 p-3 placeholder-gray-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>
        {/* Footer */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?{' '}
          <Link
            href="/user/register"
            className="text-teal-500 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
