import Image from 'next/image';

export default function Post({ user, caption, image, time, avatar }) {
  return (
    <div className='flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-lg bg-gray-800 text-white mx-auto mb-6 hover:scale-105 transition-transform duration-300 ease-in-out'>
      <div className='flex space-x-4'>
        <Image
          width={40}
          height={40}
          alt={`${user}'s avatar`}
          src={`/users/${avatar}`}
          className='object-cover w-12 h-12 rounded-full shadow-md bg-gray-500'
        />
        <div className='flex flex-col space-y-1'>
          <a
            rel='noopener noreferrer'
            href='#'
            className='text-sm font-semibold text-teal-400 hover:text-teal-500 transition-colors'
          >
            {user}
          </a>
          <span className='text-xs text-gray-400'>{time}</span>
        </div>
      </div>

      <div>
        <Image
          width={500}
          height={500}
          src={`/images/${image}`}
          alt='Post image'
          className='object-cover w-full h-60 sm:h-96 rounded-md bg-white shadow-md'
        />
        <p className='mt-4 text-sm text-gray-300'>{caption}</p>
      </div>
    </div>
  );
}
