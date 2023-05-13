import bg from '../public/8.jpg';
import Link from 'next/link';
export default function Header() {
  return (
    <>
      <header
        className='w-full bg-cover bg-center mb-10 absolute top-0 '
        style={{
          height: '88vh',
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className='flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50 p-4 backdrop-blur-md'>
          <div className='text-center text-4xl'>
            <h1
              className='text-white font-light uppercase mb-4'
              style={{ letterSpacing: '3px' }}
            >
              Welcome to{' '}
              <span className='underline text-blue-400'>Gju-Upholders</span>
            </h1>
            <a
              href={'#features'}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2'
            >
              Explore Features
            </a>
          </div>
        </div>
      </header>
      <div className='mt-[88vh]'></div>
    </>
  );
}
