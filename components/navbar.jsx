'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
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
              'Content-Type': 'application/json',
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
    getAvatar();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-transparent text-white z-10">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            className="mr-3"
            alt="Logo"
          />
          <span className="text-md md:text-lg font-bold uppercase tracking-wide">
            GJU-Upholders
          </span>
        </Link>

        {/* Right Section */}
        <div
          className={`items-center space-x-4 lg:flex hidden sm:block`}
        >
          {session?.user ? (
            <Link
              href="/user/dashboard/questions/"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={`/users/${avatar}`}
                alt="User Avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full transition-all duration-300 hover:border-teal-400"
              />
              <span className="font-medium hover:text-teal-300">
                {session.user.name}
              </span>
            </Link>
          ) : (
           ""
          )}
        </div>
      </div>
    </nav>

  );
}
