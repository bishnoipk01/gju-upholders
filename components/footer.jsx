import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-200 text-center lg:text-left mt-10 fixed bottom-0 min-w-full'>
      <div className='text-gray-700 text-center p-4'>
        © 2023 Copyright:{' '}
        <Link className='text-gray-800' href='/'>
          Gju Upholders
        </Link>
      </div>
    </footer>
  );
}
