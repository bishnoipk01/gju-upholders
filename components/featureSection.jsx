export default function FeaturesHome() {
  return (
    <div
      className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 mb-10'
      id='features'
    >
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        {/* Removed Heading */}
      </div>
      <div className='grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {/* Feature Card 1 */}
        <div className='bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105'>
          <div className='flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-teal-500'>
            <svg
              className='w-16 h-16 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 3v12a4 4 0 004 4h6a4 4 0 004-4V3M3 7l9 5 9-5'
              />
            </svg>
          </div>
          <h6 className='mb-4 font-semibold leading-5 text-2xl text-gray-100'>
            Create Posts
          </h6>
          <p className='max-w-md mb-3 text-lg text-teal-100 sm:mx-auto'>
            Share your thoughts, ideas, and experiences with the community in an easy and intuitive way.
          </p>
          <a
            href='/posts'
            className='inline-flex items-center px-6 py-3 text-lg font-medium text-white transition-colors duration-200 bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-400 focus:ring-opacity-50'
          >
            Learn more
          </a>
        </div>
        {/* Feature Card 2 */}
        <div className='bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105'>
          <div className='flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-teal-500'>
            <svg
              className='w-16 h-16 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 4v16m8-8H4'
              />
            </svg>
          </div>
          <h6 className='mb-4 font-semibold leading-5 text-2xl text-gray-100'>
            Ask Questions
          </h6>
          <p className='max-w-md mb-3 text-lg text-teal-100 sm:mx-auto'>
            Have a problem? Ask the community and get answers from others who have faced similar issues.
          </p>
          <a
            href='/questions'
            className='inline-flex items-center px-6 py-3 text-lg font-medium text-white transition-colors duration-200 bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-400 focus:ring-opacity-50'
          >
            Learn more
          </a>
        </div>
        {/* Feature Card 3 */}
        <div className='bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105'>
          <div className='flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-teal-500'>
            <svg
              className='w-16 h-16 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12h6M9 16h6m-3-4v4m0 0V8m0 4h4m-4 0h-4m8 8h4m-8 0H4m8-4H4m16 4V4'
              />
            </svg>
          </div>
          <h6 className='mb-4 font-semibold leading-5 text-2xl text-gray-100'>
            Join Clubs
          </h6>
          <p className='max-w-md mb-3 text-lg text-teal-100 sm:mx-auto'>
            Connect with university clubs and communities. Share and engage with your peers in real-time.
          </p>
          <a
            href='/clubs'
            className='inline-flex items-center px-6 py-3 text-lg font-medium text-white transition-colors duration-200 bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-400 focus:ring-opacity-50'
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
