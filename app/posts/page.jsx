'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ErrorCard from '@/components/errorCard';
import Post from '@/components/post';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () => async () => {
      const res = await fetch('/api/posts/');
      const posts = await res.json();
      console.log(posts);
      setPosts(posts.data);
    },
    [posts]
  );
  return (
    <section className='mx-auto  w-full lg:max-w-[50vw]'>
      <div id='input-post' className='p-2 shadow-sm m-8 flex bg-gray-100'>
        <Image
          className='w-10 h-10 rounded-full mr-6'
          src='/user/user.png'
          alt='Rounded avatar'
          width={60}
          height={60}
        />
        <input
          type='text'
          id='first_name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='What do you want to share?'
        />
      </div>
      <div id='main' className='flex flex-col'>
        {posts === null ? (
          <ErrorCard message='Unable to load data. try again...' />
        ) : (
          posts.map((post) => (
            <Post
              key={post.id}
              user={post.username}
              caption={post.caption}
              image={post.image}
              time={post.createdAt}
            />
          ))
        )}
      </div>
    </section>
  );
}
