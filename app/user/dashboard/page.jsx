'use client';

import ErrorCard from '@/components/errorCard';
import Success from '@/components/successMsg';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);
  const [image, setImage] = useState('default.png');

  useEffect(() => {
    if (session) setImage(session.user.avatar);
  }, [session]);

  useEffect(
    () => async () => {
      try {
        if (session) {
          const res = await fetch('/api/users/get-user', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({ uid: session.user.id }),
          });
          const data = await res.json();
          setImage(data.data.avatar);
        }
      } catch (err) {
        console.error(err);
      }
    },
    [image, session]
  );

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const uploadPhoto = async () => {
    if (!checkFile) return alert('Please select photo');
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    formData.append('Uid', session.user.id);
    const res = await fetch('/api/users/upload-photo', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    if (res.ok) {
      <Success message={'Photo uploaded successfully'} />;
      setImage(data.data.avatar);
      setSelectedFile(null);
    } else <ErrorCard message={'something went wrong'} />;
  };
  return (
    <section className='mb-6 w-full -ml-20 md:ml-auto'>
      <div className=' z-10 top-0 h-16 border-b bg-white py-2.5'>
        <div className='px-6 flex items-center justify-between  2xl:container'>
          <h5 className='text-3xl text-blue-400 font-bold lg:block'>
            Dashboard
          </h5>
        </div>
      </div>
      <div className='md:flex md:justify-around no-wrap md:-mx-2 p-10'>
        {/* Left Side */}
        <div className='w-full md:w-3/12 md:mx-2'>
          {/* Profile Card */}
          <div className='bg-white p-3 border-t-4 border-blue-400 text-center'>
            <div className='image overflow-hidden'>
              {selectedFile ? (
                <>
                  <Image
                    width={300}
                    height={300}
                    className='w-2/4 mx-auto'
                    src={
                      selectedFile ? URL.createObjectURL(selectedFile) : null
                    }
                    alt=''
                  />
                  <button
                    className='text-blue-300 hover:underline inline-block p-2'
                    onClick={uploadPhoto}
                  >
                    upload
                  </button>
                </>
              ) : (
                <Image
                  width={300}
                  height={300}
                  src={`/users/${image}`}
                  alt=''
                  className='w-2/4 mx-auto'
                />
              )}
            </div>
            <label
              htmlFor='avatar'
              className='text-blue-300 hover:underline  inline-block p-2'
            >
              <input
                type='file'
                name='avatar'
                id='avatar'
                hidden
                onChange={imageHandler}
              />
              update photo
            </label>
            <h1 className='font-bold text-2xl text-blue-500 uppercase leading-8 my-5'>
              {session?.user.name}
            </h1>
            {/* <h3 className='text-gray-600 font-lg font-semibold leading-6 text-left'>
              **TagLine**
            </h3>
            <p className='text-sm text-gray-500 hover:text-gray-600 leading-6 text-left'>
              **BIO**
            </p> */}
            <ul className='bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'>
              <li className='flex items-center py-3'>
                <span>Status</span>
                <span className='ml-auto'>
                  <span className='bg-blue-500 py-1 px-2 rounded text-white text-sm'>
                    Active
                  </span>
                </span>
              </li>
              {/* <li className='flex items-center py-3'>
                <span>Member since</span>
                <span className='ml-auto'>Nov 07, 2016</span>
              </li> */}
            </ul>
          </div>
          {/* End of profile card */}
        </div>
        {/* Right Side */}
        <div className='w-full md:w-8/12 mx-6 mt-6'>
          {/* Profile tab */}
          {/* About Section */}
          {/* <div className='bg-white shadow-sm rounded-sm'>
            <div className='flex items-center space-x-2 leading-8'>
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
              <div className=' text-base'>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>First Name</div>
                  <div className='px-4 py-2'>
                    {session?.user.name.split(' ')[0]}
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Last Name</div>
                  <div className='px-4 py-2'>
                    {session?.user.name.split(' ')[1]}
                  </div>
                </div>
                
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Contact No.</div>
                  <div className='px-4 py-2'>NA</div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Address</div>
                  <div className='px-4 py-2'>NA</div>
                </div>

                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Email.</div>
                  <div className='px-4 py-2'>
                    <a className='text-blue-800' href='mailto:#'>
                      NA
                    </a>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='px-4 py-2 font-semibold'>Birthday</div>
                  <div className='px-4 py-2'>NA</div>
                </div>
              </div>
            </div>
            <button className='block w-full text-blue-800 text-base font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4 md:w-8/12 '>
              Edit Info
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
