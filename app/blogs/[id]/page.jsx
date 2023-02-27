/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import BlogHeader from '@/components/blogHeader';
import blog from '@/test-data/json/blog.json';

export default function BlogDetailed() {
  return (
    <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 text-lg'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
          <BlogHeader
            image='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
            writer='Anonmonaous'
            date={'date'}
            blogTitle={blog.title}
          />
          <Image
            src={blog.image}
            height={500}
            width={800}
            alt=''
            className='my-4'
          />
          <p className='text-lg font-light leading-relaxed mt-6 mb-4 text-grey-800 text-justify'>
            {blog.description}
          </p>
        </article>
      </div>
    </main>
  );
}
