import Image from 'next/image';

export default function BlogHeader({ image, writer, date, blogTitle }) {
  return (
    <section className='mb-4 lg:mb-6 not-format'>
      <address className='flex items-center mb-6 not-italic'>
        <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
          <Image
            width={500}
            height={500}
            className='mr-4 w-16 h-16 rounded-full'
            src={image}
            alt='profile pic'
          />
          <div>
            <a
              href='#'
              rel='writer'
              className='text-xl font-bold text-gray-900 dark:text-white'
            >
              {writer}
            </a>
            {/* <p className='text-base font-light text-gray-500'>
              Graphic Designer, educator & CEO 
            </p> */}
            <p className='text-base font-light text-gray-500'>{date}</p>
          </div>
        </div>
      </address>
      <h1 className='heading-1'>{blogTitle}</h1>
    </section>
  );
}
