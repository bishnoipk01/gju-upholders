export default function FeaturesHome() {
  return (
    <div
      className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 my-28'
      id='features'
    >
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='df31b9f6-a505-42f8-af91-d2b7c3218e5c'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Explore</span>
          </span>{' '}
          Our Features
        </h2>

        {/* <p className='text-base text-gray-700 md:text-lg'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p> */}
      </div>
      <div className='grid gap-8 row-gap-8 lg:grid-cols-3'>
        <div className='sm:text-center'>
          <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24'>
            <svg
              className='w-12 h-12 text-sky-600 sm:w-20 sm:h-20'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-4 font-semibold leading-5 text-2xl  text-cyan-900'>
            Make A Post
          </h6>
          <p className='max-w-md mb-3 text-lg text-cyan-700  sm:mx-auto'>
            Put together your ideas and experience and share them with others
          </p>
          <a
            href='/posts'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-sky-600 hover:text-sky-800'
          >
            Learn more
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </a>
        </div>
        <div className='sm:text-center'>
          <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='3'
              className='w-10 h-10 text-sky-700'
              viewBox='0 0 24 24'
            >
              <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
            </svg>
          </div>
          <h6 className='mb-4 font-semibold leading-5 text-2xl  text-cyan-900'>
            Ask A Question
          </h6>
          <p className='max-w-md mb-3 text-lg  text-cyan-700 sm:mx-auto'>
            Getting stuck at any problem, just ask a question
          </p>
          <a
            href='/questions'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-sky-600 hover:text-sky-800'
          >
            Learn more
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </a>
        </div>
        <div className='sm:text-center'>
          <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='3'
              className='w-10 h-10 text-sky-600'
              viewBox='0 0 24 24'
            >
              <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
              <circle cx='12' cy='7' r='4'></circle>
            </svg>
          </div>
          <h6 className='mb-4 font-semibold leading-5 text-2xl  text-cyan-900'>
            Clubs
          </h6>
          <p className='max-w-md mb-3 text-lg  text-cyan-700 sm:mx-auto'>
            A single place to interact with university clubs, create and share
            information
          </p>
          <a
            href='/clubs'
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-sky-600 hover:text-sky-800'
          >
            Learn more
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
