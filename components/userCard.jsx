import Image from 'next/image';

export default function UserCard({ name, image }) {
  return (
    <button className='flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 md-mr-0 p-3'>
      <Image
        className='w-8 h-8 mr-2 rounded-full'
        src={image}
        alt='user photo'
        width={50}
        height={50}
      />
      <span className='text-sm text-neutral-400'>{name}</span>
    </button>
  );
}
