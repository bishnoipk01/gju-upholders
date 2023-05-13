'use client';
import { useEffect, useState } from 'react';
import ImageUpload from './imageUpload';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function PostModal({ loadData }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);
  const [caption, setCaption] = useState('');
  const [avatar, setAvatar] = useState('default.png');

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };
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
          setAvatar(data.data.avatar);
        }
      } catch (err) {
        console.error(err);
      }
    },
    [session]
  );

  const uploadPost = async (e) => {
    try {
      if (!checkFile) return alert('Please select a file ');
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('caption', caption);
      formData.append('Uid', session.user.id);
      const res = await fetch('/api/posts/new-post', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        alert('New post added successfully');
        setShowModal(false);
        loadData();
        setSelectedFile(null);
      } else alert('something went wrong');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        id='input-post'
        className='p-2 shadow-sm m-8 flex bg-gray-100 rounded-lg'
        onClick={() => setShowModal(true)}
      >
        <Image
          className='w-10 h-10 rounded-full mr-6'
          src={`/users/${avatar}`}
          alt='Rounded avatar'
          width={60}
          height={60}
        />
        <input
          type='text'
          id='first_name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-pointer'
          placeholder='What do you want to share?'
          disabled
        />
      </div>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className=' rounded-lg shadow-lg relative w-full bg-white'>
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>Create Post</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-60 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className=' text-gray-800 opacity-80 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      x
                    </span>
                  </button>
                </div>
                <form
                  action=''
                  className='p-4 m-4'
                  onSubmit={(e) => {
                    e.preventDefault();
                    uploadPost(e);
                  }}
                >
                  <textarea
                    name='image-caption'
                    id='image-caption'
                    cols='40'
                    rows='5'
                    placeholder='Write your thought..'
                    className='focus:outline-none focus:border-0'
                    onChange={(e) => setCaption(e.target.value)}
                  ></textarea>
                  <div id='image-upload'>
                    <div className='flex justify-center items-center m-4'>
                      {selectedFile && (
                        <Image
                          width='300'
                          height='300'
                          className={`inline-block m-4  ${
                            checkFile ? 'opacity-1' : 'opacity-0'
                          }`}
                          alt='image upload'
                          src={
                            selectedFile
                              ? URL.createObjectURL(selectedFile)
                              : null
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div className='flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b'>
                    <div className=' p-2'>
                      <label htmlFor='file-input'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-12 h-12 text-gray-400 group-hover:text-gray-600 cursor-pointer inline'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </label>
                      <input
                        type='file'
                        id='file-input'
                        className=' hidden'
                        onChange={imageHandler}
                      />
                    </div>
                    <input
                      className='inline-block bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer'
                      type='submit'
                      value={'upload'}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
