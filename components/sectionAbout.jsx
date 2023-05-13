import aboutBg from '@/public/about-us.jpg';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            About Us
          </h2>
          <p className='mb-4'>
            With our platform, we aim to provide a single place for all clubs in
            our university to manage and provide updates to club members and
            students. When it comes to getting information and answers to
            questions, it can be a bit of a gray area. you can answer a
            question.
          </p>{' '}
          <p>
            {' '}
            But there’s a whole lot more you can do as well. In addition to
            answering the question, you can follow the individual question,
            despite what topic it resides in
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <Image
            height={400}
            width={400}
            className='w-full rounded-lg'
            src={aboutBg.src}
            alt='office content 1'
          />
          <Image
            height={400}
            width={400}
            className='mt-4 w-full lg:mt-10 rounded-lg'
            src='/about-us-2.jpg'
            alt='office content 2'
          />
        </div>
      </div>
    </section>
  );
}
