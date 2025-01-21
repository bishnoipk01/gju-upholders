'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [matchPass, setMatchPass] = useState('');

  const RegisterUser = async () => {
    if (password !== matchPass) return alert('Passwords do not match!');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (res.ok) {
      await signIn('credentials', {
        email,
        password,
        redirect: true,
        callbackUrl: '/',
      });
    } else {
      alert(data.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-5 sm:p-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        {/* Header */}
        <h1 className="text-xl font-bold text-center text-white mb-3">
          Create an Account
        </h1>
        <p className="text-center text-gray-400 mb-6 text-sm">
          Join us and start your journey today.
        </p>

        {/* Signup Form */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            RegisterUser();
          }}
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:ring-teal-500 focus:border-teal-500 p-2 placeholder-gray-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="username@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:ring-teal-500 focus:border-teal-500 p-2 placeholder-gray-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:ring-teal-500 focus:border-teal-500 p-2 placeholder-gray-500"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              required
              onChange={(e) => setMatchPass(e.target.value)}
              className="w-full bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:ring-teal-500 focus:border-teal-500 p-2 placeholder-gray-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-lg shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{' '}
          <Link href="/user/login" className="text-teal-500 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </section>
  );
}
