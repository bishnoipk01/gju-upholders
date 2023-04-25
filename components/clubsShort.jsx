import Image from 'next/image';
import Link from 'next/link';

export default function ClubsShort() {
  return (
    <div className='bg-sky-50'>
      <div className='px-4 pb-16 pt-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8'>
          <h2 className='max-w-lg mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group'>
            <span className='inline-block mb-1 sm:mb-4'>
              Clubs
              <br className='hidden md:block' />
              for your growth
            </span>
            <div className='h-1 ml-auto duration-300 origin-left transform bg-sky-400 scale-x-30 group-hover:scale-x-100' />
          </h2>
          <p className='text-gray-800 lg:text-base  lg:max-w-md'>
            Explore all the clubs and interact. A online platform where we pull
            together all kinds of students under a shared mission and provide
            information
          </p>
        </div>
        <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
          <a href='/clubs/gjust-coders' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <Image
                height={400}
                width={400}
                className=' w-full h-56 md:h-64 xl:h-80 object-center '
                src={'/GJUST-CODERS.svg'}
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-2 bg-black bg-opacity-60'>
                <p className='font-bold text-base text-center uppercase tracking-wide text-white'>
                  Gjust-Coders
                </p>
              </div>
            </div>
          </a>
          <a href='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <Image
                height={400}
                width={400}
                className='object-center w-full h-56 md:h-64 xl:h-80'
                src={'/aptitude_final.svg'}
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-2 bg-black bg-opacity-60'>
                <p className='font-bold text-base text-center uppercase tracking-wide text-white'>
                  Aptitude Club
                </p>
              </div>
            </div>
          </a>
          <a href='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <Image
                height={400}
                width={400}
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src={'/udbhavna.png'}
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-2 bg-black bg-opacity-60'>
                <p className='font-bold text-base text-center uppercase tracking-wide text-white'>
                  Udbhavna club
                </p>
              </div>
            </div>
          </a>
          <a href='/' aria-label='View Item'>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <Image
                height={400}
                width={400}
                className='object-center w-full h-56 md:h-64 xl:h-80'
                src={'/speakathon.png'}
                alt=''
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-2 bg-black bg-opacity-60'>
                <p className='font-bold text-base text-center uppercase tracking-wide text-white'>
                  Speakathon club
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className='text-center'>
          <a
            href='/'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-sky-400 hover:text-sky-800'
          >
            See more
            <svg
              className='inline-block w-3 ml-2'
              fill='currentColor'
              viewBox='0 0 12 12'
            >
              <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
