'use client';

import DashForm from '@/components/dashForm';

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
        <div className=' h-[80vh]'>
          {/* <DashForm />
           */}
          <div className='w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-4'>
            <div className='relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border'>
              <div className='p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl'>
                <div className='flex flex-wrap -mx-3'>
                  <div className='flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none'>
                    <h6 className='mb-0'>Profile Information</h6>
                  </div>
                </div>
              </div>
              <div className='flex-auto p-4'>
                <p className='leading-normal text-size-sm'>
                  Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </p>
                <hr className='h-px my-6 bg-transparent bg-gradient-horizontal-light' />
                <ul className='flex flex-col pl-0 mb-0 rounded-lg'>
                  <li className='relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-sm text-inherit'>
                    <strong className='text-slate-700'>Full Name:</strong>{' '}
                    &nbsp; Alec M. Thompson
                  </li>
                  <li className='relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit'>
                    <strong className='text-slate-700'>Mobile:</strong> &nbsp;
                    (44) 123 1234 123
                  </li>
                  <li className='relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit'>
                    <strong className='text-slate-700'>Email:</strong> &nbsp;
                    alecthompson@mail.com
                  </li>
                  <li className='relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit'>
                    <strong className='text-slate-700'>Location:</strong> &nbsp;
                    USA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
