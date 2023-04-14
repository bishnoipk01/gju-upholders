import Image from 'next/image';
import Link from 'next/link';
export default function GetStarted() {
  return (
    <section className='bg-gray-100 text-gray-800' id='get-started'>
      <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
        <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <h1 className='text-5xl font-bold leading-none sm:text-6xl'>
            Get started <br />
            <span className='text-indigo-600'>With us</span>
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12'>
            It is a platfrom created by students for the students of the
            University, we hope you will help us in making it better
            <br className='hidden md:inline lg:hidden' /> For more guidelines
            please see Privacy and security policy
          </p>
          <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
            <Link
              href='/user/login'
              className='px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-gray-50'
            >
              Log in
            </Link>
            <Link
              href='/user/register'
              className='px-8 py-3 text-lg font-semibold border rounded border-gray-800'
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
          <Image
            src='/Business_SVG.svg'
            alt=''
            className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
