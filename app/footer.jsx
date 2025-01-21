import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-4">
      <div className="text-center">
        <p className="text-sm">
          © 2023 Copyright:{' '}
          <Link href="/" className="text-blue-400 hover:underline">
            GJU Upholders
          </Link>
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ by the GJU community
        </p>
      </div>
    </footer>
  );
}
