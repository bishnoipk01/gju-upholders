// 'use client';

export default function Dashboard() {
  return (
    <>
      <div className='ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] mt-2'>
        <div className=' z-10 top-0 h-16 border-b bg-white lg:py-2.5'>
          <div className='px-6 flex items-center justify-between space-x-4 2xl:container'>
            <h5 hidden className='text-2xl text-gray-600 font-medium lg:block'>
              Dashboard
            </h5>
            <button className='w-12 h-16 -mr-2 border-r lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 my-auto'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=' h-[80vh]'></div>
      </div>
    </>
  );
}
