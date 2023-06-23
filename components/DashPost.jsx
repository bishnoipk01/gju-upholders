import Image from 'next/image';

export default function DashPost({ caption, image, time }) {
  return (
    <div className='flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-transparent text-gray-800 mx-auto mb-6'>
      <div className='flex space-x-4'>
        <div className='flex flex-col space-y-1'>
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
