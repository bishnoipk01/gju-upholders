import Image from 'next/image';
import Link from 'next/link';

export default function ContactHome() {
  return (
    <div className=' py-12 px-4'>
      <div className='w-full flex justify-center'>
        <div className='w-full md:w-11/12 xl:w-full bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16'>
          <div>
            <div className='flex flex-wrap items-center md:flex-row flex-col-reverse'>
              <div className='md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4'>
                <div>
                  <h1
                    role='heading'
                    className='text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center'
                  >
                    Have something on Mind? or just want to suggest something.
                    Feel free to reach out to us
                  </h1>
                </div>
                <Link
                  href={'/contact'}
                  className='inline-block mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90 focus:outline-none hover:-translate-y-1 active:-translate-y-0 hover:shadow-md active:shadow-sm transition-all'
                >
                  contact us
                </Link>
              </div>
              <div className='md:w-1/3 w-2/3'>
                <Image
                  height={300}
                  width={300}
                  src='/CTA.png'
                  alt='cartoon avatars'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
