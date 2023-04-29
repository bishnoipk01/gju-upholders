'use client';

import DashForm from '@/components/dashForm';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <section className='mb-6 w-full'>
      <div className=' z-10 top-0 h-16 border-b bg-white py-2.5'>
        <div className='px-6 flex items-center justify-between  2xl:container'>
          <h5 className='text-3xl text-blue-400 font-bold lg:block'>
            Dashboard
          </h5>
        </div>
      </div>
      <div className='md:flex no-wrap md:-mx-2 p-10'>
        {/* Left Side */}
        <div className='w-full md:w-3/12 md:mx-2'>
          {/* Profile Card */}
          <div className='bg-white p-3 border-t-4 border-green-400'>
            <div className='image overflow-hidden'>
              <Image
                width={300}
                height={300}
                className='w-2/4 mx-auto'
                src='/user/user.png'
                alt=''
              />
            </div>
            <h1 className='text-gray-900 font-bold text-xl leading-8 my-1'>
              Jane Doe
            </h1>
            <h3 className='text-gray-600 font-lg text-semibold leading-6'>
              Owner at Her Company Inc.
            </h3>
            <p className='text-sm text-gray-500 hover:text-gray-600 leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
            <ul className='bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'>
              <li className='flex items-center py-3'>
                <span>Status</span>
                <span className='ml-auto'>
                  <span className='bg-green-500 py-1 px-2 rounded text-white text-sm'>
                    Active
                  </span>
                </span>
              </li>
              <li className='flex items-center py-3'>
                <span>Member since</span>
                <span className='ml-auto'>Nov 07, 2016</span>
              </li>
            </ul>
          </div>
          {/* End of profile card */}
        </div>
        {/* Right Side */}
        <div className='w-full md:w-9/12 mx-2'>
          {/* Profile tab */}
          {/* About Section */}
          <div className='bg-white p-3 shadow-sm rounded-sm'>
            <div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
              <span>
                <svg
                  className='h-7 text-blue-400'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2.5}
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </span>
              <span className='tracking-wide text-2xl font-bold text-blue-400'>
                About
              </span>
            </div>
            <div className='text-gray-700'>
              <div className='grid md:grid-cols-2 text-sm'>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>First Name</div>
                  <div className='px-4 py-2'>Jane</div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Last Name</div>
                  <div className='px-4 py-2'>Doe</div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Gender</div>
                  <div className='px-4 py-2'>Female</div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Contact No.</div>
                  <div className='px-4 py-2'>+11 998001001</div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Current Address</div>
                  <div className='px-4 py-2'>Beech Creek, PA, Pennsylvania</div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>
                    Permanant Address
                  </div>
                  <div className='px-4 py-2'>
                    Arlington Heights, IL, Illinois
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Email.</div>
                  <div className='px-4 py-2'>
                    <a className='text-blue-800' href='mailto:jane@example.com'>
                      jane@example.com
                    </a>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Birthday</div>
                  <div className='px-4 py-2'>Feb 06, 1998</div>
                </div>
              </div>
            </div>
            <button className='block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4'>
              Show Full Information
            </button>
          </div>
          {/* End of about section */}
        </div>
      </div>
    </section>
  );
}
