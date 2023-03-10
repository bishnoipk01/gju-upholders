'use client';
import AsideDash from '@/components/asideDash';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../footer';

export default function TestIt() {
  const [name, setName] = useState('John Doe');
  const [edit, setEdit] = useState(false);
  return (
    <div className='p-16'>
      <div className='p-8 bg-white shadow mt-24'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0'>
            <div>
              <p className='font-bold text-gray-700 text-xl'>22</p>
              <p className='text-gray-400'>Friends</p>
            </div>
            <div>
              <p className='font-bold text-gray-700 text-xl'>10</p>
              <p className='text-gray-400'>Photos</p>
            </div>
            <div>
              <p className='font-bold text-gray-700 text-xl'>89</p>
              <p className='text-gray-400'>Comments</p>
            </div>
          </div>
          <div className='relative'>
            <div className='w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-24 w-24'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <div className='space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center'>
            <button className='text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5'>
              Connect
            </button>
            <button className='text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5'>
              Message
            </button>
          </div>
        </div>
        <div className='mt-20 text-center border-b pb-12'>
          <h1 className='text-4xl font-medium text-gray-700'>
            Jessica Jones, <span className='font-light text-gray-500'>27</span>
          </h1>
          <p className='font-light text-gray-600 mt-3'>Bucharest, Romania</p>
          <p className='mt-8 text-gray-500'>
            Solution Manager - Creative Tim Officer
          </p>
          <p className='mt-2 text-gray-500'>University of Computer Science</p>
        </div>
        <div className='mt-12 flex flex-col justify-center'>
          <p className='text-gray-600 text-center font-light lg:px-16'>
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <button className='text-indigo-500 py-2 px-4  font-medium mt-4'>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

// <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center'>
//     <div className='container max-w-screen-lg mx-auto'>
//       <div>
//         <h2 className='font-semibold text-xl text-gray-600'>
//           Responsive Form
//         </h2>
//         <p className='text-gray-500 mb-6'>
//           Form is mobile responsive. Give it a try.
//         </p>
//         <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
//           <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
//             <div className='text-gray-600'>
//               <p className='font-medium text-lg'>Personal Details</p>
//               <p>Please fill out all the fields.</p>
//             </div>
//             <div className='lg:col-span-2'>
//               <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
//                 <div className='md:col-span-5'>
//                   <label htmlFor='full_name'>Full Name</label>
//                   <input
//                     type='text'
//                     name='full_name'
//                     id='full_name'
//                     className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
//                     defaultValue
//                   />
//                 </div>
//                 <div className='md:col-span-5'>
//                   <label htmlFor='email'>Email Address</label>
//                   <input
//                     type='text'
//                     name='email'
//                     id='email'
//                     className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
//                     defaultValue
//                     placeholder='email@domain.com'
//                   />
//                 </div>
//                 <div className='md:col-span-3'>
//                   <label htmlFor='address'>Address / Street</label>
//                   <input
//                     type='text'
//                     name='address'
//                     id='address'
//                     className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
//                     defaultValue
//                     placeholder
//                   />
//                 </div>
//                 <div className='md:col-span-2'>
//                   <label htmlFor='city'>City</label>
//                   <input
//                     type='text'
//                     name='city'
//                     id='city'
//                     className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
//                     defaultValue
//                     placeholder
//                   />
//                 </div>
//                 <div className='md:col-span-2'>
//                   <label htmlFor='country'>Country / region</label>
//                   <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
//                     <input
//                       name='country'
//                       id='country'
//                       placeholder='Country'
//                       className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
//                       defaultValue
//                     />
//                     <button
//                       tabIndex={-1}
//                       className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'
//                     >
//                       <svg
//                         className='w-4 h-4 mx-2 fill-current'
//                         xmlns='http://www.w3.org/2000/svg'
//                         viewBox='0 0 24 24'
//                         stroke='currentColor'
//                         strokeWidth={2}
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                       >
//                         <line x1={18} y1={6} x2={6} y2={18} />
//                         <line x1={6} y1={6} x2={18} y2={18} />
//                       </svg>
//                     </button>
//                     <button
//                       tabIndex={-1}
//                       htmlFor='show_more'
//                       className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'
//                     >
//                       <svg
//                         className='w-4 h-4 mx-2 fill-current'
//                         xmlns='http://www.w3.org/2000/svg'
//                         viewBox='0 0 24 24'
//                         stroke='currentColor'
//                         strokeWidth={2}
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                       >
//                         <polyline points='18 15 12 9 6 15' />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className='md:col-span-2'>
//                   <label htmlFor='state'>State / province</label>
//                   <div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
//                     <input
//                       name='state'
//                       id='state'
//                       placeholder='State'
//                       className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
//                       defaultValue
//                     />
//                     <button
//                       tabIndex={-1}
//                       className='cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600'
//                     >
//                       <svg
//                         className='w-4 h-4 mx-2 fill-current'
//                         xmlns='http://www.w3.org/2000/svg'
//                         viewBox='0 0 24 24'
//                         stroke='currentColor'
//                         strokeWidth={2}
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                       >
//                         <line x1={18} y1={6} x2={6} y2={18} />
//                         <line x1={6} y1={6} x2={18} y2={18} />
//                       </svg>
//                     </button>
//                     <button
//                       tabIndex={-1}
//                       htmlFor='show_more'
//                       className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600'
//                     >
//                       <svg
//                         className='w-4 h-4 mx-2 fill-current'
//                         xmlns='http://www.w3.org/2000/svg'
//                         viewBox='0 0 24 24'
//                         stroke='currentColor'
//                         strokeWidth={2}
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                       >
//                         <polyline points='18 15 12 9 6 15' />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className='md:col-span-1'>
//                   <label htmlFor='zipcode'>Zipcode</label>
//                   <input
//                     type='text'
//                     name='zipcode'
//                     id='zipcode'
//                     className='transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50'
//                     placeholder
//                     defaultValue
//                   />
//                 </div>
//                 <div className='md:col-span-5'>
//                   <div className='inline-flex items-center'>
//                     <input
//                       type='checkbox'
//                       name='billing_same'
//                       id='billing_same'
//                       className='form-checkbox'
//                     />
//                     <label htmlFor='billing_same' className='ml-2'>
//                       My billing address is different than above.
//                     </label>
//                   </div>
//                 </div>
//                 <div className='md:col-span-2'>
//                   <label htmlFor='soda'>How many soda pops?</label>
//                   <div className='h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
//                     <button
//                       tabIndex={-1}
//                       htmlFor='show_more'
//                       className='cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600'
//                     >
//                       <svg
//                         xmlns='http://www.w3.org/2000/svg'
//                         className='h-4 w-4 mx-2'
//                         viewBox='0 0 20 20'
//                         fill='currentColor'
//                       >
//                         <path
//                           fillRule='evenodd'
//                           d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
//                           clipRule='evenodd'
//                         />
//                       </svg>
//                     </button>
//                     <input
//                       name='soda'
//                       id='soda'
//                       placeholder={0}
//                       className='px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent'
//                       defaultValue={0}
//                     />
//                     <button
//                       tabIndex={-1}
//                       htmlFor='show_more'
//                       className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600'
//                     >
//                       <svg
//                         xmlns='http://www.w3.org/2000/svg'
//                         className='h-4 w-4 mx-2 fill-current'
//                         viewBox='0 0 20 20'
//                         fill='currentColor'
//                       >
//                         <path
//                           fillRule='evenodd'
//                           d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
//                           clipRule='evenodd'
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <div className='md:col-span-5 text-right'>
//                   <div className='inline-flex items-end'>
//                     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <a
//         href='https://www.buymeacoffee.com/dgauderman'
//         className='md:absolute bottom-0 right-0 p-4 float-right'
//       >
//         <Image
//           src='https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg'
//           alt='Buy Me A Coffee'
//           className='transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white'
//         />
//       </a> */}
//     </div>
//   </div>
