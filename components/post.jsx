import Image from 'next/image';

export default function Post({ user, caption, image, time, avatar }) {
  return (
    <div className='flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-violet-200 text-gray-800 mx-auto mb-6'>
      <div className='flex space-x-4'>
        <Image
          width={400}
          height={400}
          alt=''
          src={`/users/${avatar}`}
          className='object-cover w-12 h-12 rounded-full shadow bg-gray-500'
        />
        <div className='flex flex-col space-y-1'>
          <a
            rel='noopener noreferrer'
            href='#'
            className='text-sm font-semibold'
          >
            {user}
          </a>
          <span className='text-xs text-gray-600'>{time}</span>
        </div>
      </div>
      <div>
        <Image
          width={500}
          height={500}
          src={`/images/${image}`}
          alt=''
          className='object-cover w-96 mb-4 h-60 sm:h-96 bg-white overflow-hidden inline-block'
        />
        {/* <h2 className='mb-1 text-xl font-semibold'>
          Nam cu platonem posidonium sanctus debitis te
        </h2> */}
        <p className='text-sm text-gray-600'>{caption}</p>
      </div>
    </div>
  );
}
