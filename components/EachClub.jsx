import Image from 'next/image';
export default function EachClub({clubName,clubInfo,feature1,feature2,feature3,feature4,image}) {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-5 row-gap-10 lg:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <div className='max-w-xl mb-6'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-cyan-600 sm:text-5xl sm:leading-none'>
              {clubName}
              {/* <br className='hidden md:block' />
              jumps over{' '} */}
              {/* <span className='relative px-1'>
                <div className='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-violet-200' />
                <span className='relative inline-block text-blue-400'>
                  a lazy dog
                </span>
              </span> */}
            </h2>
            <p className='text-base text-gray-700 md:text-xl'>
           {clubInfo}
            </p>
          </div>
          <p className='mb-4 text-lg font-bold tracking-widest uppercase'>
            Features
          </p>
          <div className='grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0'>
            <ul className='space-y-3 text-lg'>
              <li className='flex'>
                <span className='mr-1'>
                  <svg
                    className='w-7 h-7 mt-px text-blue-400'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </span>
                {feature1}
              </li>
              <li className='flex'>
                <span className='mr-1'>
                  <svg
                    className='w-7 h-7 mt-px text-blue-400'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </span>
                {feature2}
                  
              </li>
              {/* <li className='flex'>
                <span className='mr-1'>
                  <svg
                    className='w-7 h-7 mt-px text-blue-400'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </span>
        
              </li> */}
            </ul>
            <ul className='space-y-3 text-lg'>
              <li className='flex'>
                <span className='mr-1'>
                  <svg
                    className='w-7 h-7 mt-px text-blue-400'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </span>
                {feature3}
                
              </li>
              <li className='flex'>
                <span className='mr-1'>
                  <svg
                    className='w-7 h-7 mt-px text-blue-400'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </span>
                {feature4}
              </li>
              {/* <li className='flex'>
                <span className='mr-1'>
                  <svg
                    className='w-7 h-7 mt-px text-blue-400'
                    stroke='currentColor'
                    viewBox='0 0 52 52'
                  >
                    <polygon
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      points='29 13 14 29 25 29 23 39 38 23 27 23'
                    />
                  </svg>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        <div>
          <Image
            className='object-cover w-full  rounded shadow-lg sm:w-3/4'
            src={image}
            width={400}
            height={400}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
