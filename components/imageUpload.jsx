import Image from 'next/image';
import { useState } from 'react';

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const imagesubmission = () => {
    if (checkFile) {
      alert('File Uploaded');
      console.log(selectedFile);
    } else {
      alert('select a file');
    }
  };

  return (
    <div id='image-upload'>
      <div className='min-h-min bg-green-50 p-2'>
        <label htmlFor='file-input'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-12 h-12 text-gray-400 group-hover:text-gray-600 cursor-pointer inline'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
              clip-rule='evenodd'
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
      <div className='flex justify-center items-center m-4'>
        {selectedFile && (
          <Image
            width='400'
            height='400'
            className={`inline-block m-4  ${
              checkFile ? 'opacity-1' : 'opacity-0'
            }`}
            alt='image upload'
            src={selectedFile ? URL.createObjectURL(selectedFile) : null}
          />
        )}
      </div>
      <button
        onClick={imagesubmission}
        className='w-full h-14 bg-green-600 text-white rounded-md'
      >
        Upload
      </button>
    </div>
  );
}
