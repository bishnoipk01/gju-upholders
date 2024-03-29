import Image from 'next/image';

export default function ClubWork({poster1,poster2,poster3,poster4}) {
  return (
    <section className='py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100'>
      <div className='container p-6 mx-auto space-y-8'>
        <div className='space-y-2 text-center'>
          <h2 className='text-3xl font-bold'>Events</h2>
          {/* <p className='font-serif text-sm dark:text-gray-400'>
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p> */}
        </div>
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2 2xl:grid-cols-4'>
          <article className='flex flex-col dark:bg-gray-900'>
            <a
              rel='noopener noreferrer'
              href='#'
              aria-label='Te nulla oportere reprimique his dolorum='
            >
              <Image
                height={200}
                width={200}
                alt=''
                className='object-cover w-full h-72 dark:bg-gray-500'
                src={poster1.image}
              />
            </a>
            <div className='flex flex-col flex-1 p-6'>
              <a
                rel='noopener noreferrer'
                href='#'
                aria-label='Te nulla oportere reprimique his dolorum'
              ></a>
              {/* <a
                rel='noopener noreferrer'
                href='#'
                className='text-xs tracking-wider uppercase hover:underline dark:text-violet-400'
              >
                Convenire
              </a> */}
              <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
                {poster1.name}
              </h3>
              <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400'>
                <span>{poster1.date}</span>
                
              </div>
            </div>
          </article>
          <article className='flex flex-col dark:bg-gray-900'>
            <a
              rel='noopener noreferrer'
              href='#'
              aria-label='Te nulla oportere reprimique his dolorum'
            >
              <Image
                height={200}
                width={200}
                alt=''
                className='object-cover w-full h-72 dark:bg-gray-500'
                src={poster2.image}
              />
            </a>
            <div className='flex flex-col flex-1 p-6'>
              <a
                rel='noopener noreferrer'
                href='#'
                aria-label='Te nulla oportere reprimique his dolorum'
              ></a>
              {/* <a
                rel='noopener noreferrer'
                href='#'
                className='text-xs tracking-wider uppercase hover:underline dark:text-violet-400'
              >
                Convenire
              </a> */}
              <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
              {poster2.name}
              </h3>
              <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400'>
                <span>{poster2.date}</span>
                
              </div>
            </div>
          </article>
          <article className='flex flex-col dark:bg-gray-900'>
            <a
              rel='noopener noreferrer'
              href='#'
              aria-label='Te nulla oportere reprimique his dolorum'
            >
              <Image
                height={200}
                width={200}
                alt=''
                className='object-cover w-full h-72 dark:bg-gray-500'
                src={poster3.image}
              />
            </a>
            <div className='flex flex-col flex-1 p-6'>
              <a
                rel='noopener noreferrer'
                href='#'
                aria-label='Te nulla oportere reprimique his dolorum'
              ></a>
              {/* <a
                rel='noopener noreferrer'
                href='#'
                className='text-xs tracking-wider uppercase hover:underline dark:text-violet-400'
              >
                Convenire
              </a> */}
              <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
              {poster3.name}
              </h3>
              <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400'>
                <span>{poster3.date}</span>
              </div>
            </div>
          </article>
          <article className='flex flex-col dark:bg-gray-900'>
            <a
              rel='noopener noreferrer'
              href='#'
              aria-label='Te nulla oportere reprimique his dolorum'
            >
              <Image
                height={200}
                width={200}
                alt=''
                className='object-cover w-full h-72 dark:bg-gray-500'
                src={poster4.image}
              />
            </a>
            <div className='flex flex-col flex-1 p-6'>
              <a
                rel='noopener noreferrer'
                href='#'
                aria-label='Te nulla oportere reprimique his dolorum'
              ></a>
              {/* <a
                rel='noopener noreferrer'
                href='#'
                className='text-xs tracking-wider uppercase hover:underline dark:text-violet-400'
              >
                Convenire
              </a> */}
              <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
              {poster4.name}
              </h3>
              <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400'>
                <span>{poster4.date}</span>
                
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
