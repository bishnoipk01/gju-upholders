import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 py-40">
      <div className="flex items-center justify-center w-full h-full text-center text-white">
        <div className="max-w-xl mx-auto space-y-6">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight whitespace-nowrap">
            Welcome to{' '}
            <span className="text-teal-200 underline decoration-4">
              Gju-Upholders
            </span>
          </h1>

          {/* Description */}
          <p className="text-md text-teal-100 sm:text-lg md:text-xl">
            A community-driven platform to share, learn, and grow. Connect with like-minded individuals and explore amazing features.
          </p>

          {/* Conditional Button */}
          {!session?.user ? (
            <Link href="#get-started">
              <button className="mt-6 inline-block px-8 py-3 rounded-full font-medium text-lg text-teal-700 bg-white hover:bg-teal-100 transition-all duration-300 ease-in-out border-2 border-teal-500 hover:border-teal-600">
                Get Started
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
