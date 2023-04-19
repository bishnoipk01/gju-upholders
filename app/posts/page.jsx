'use client';
import Post from '@/components/Post';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import parseDate from '@/utils/js-date';
import ErrorCard from '@/components/errorCard';

const getPosts = async () => {
  try {
    const res = await fetch('/api/posts/', { cache: `no-cache` });
    const posts = await res.json();
    if (res.status !== 200) return null;
    return posts.data;
  } catch (err) {
    console.log(err);
  }
};

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () => async () => {
      const data = await getPosts();
      setPosts(data);
      console.log(data);
    },
    []
  );
  return (
    <section className='mx-auto  w-full lg:max-w-[50vw]'>
      <div id='input-post' className='p-2 shadow-sm m-8 flex bg-gray-100'>
        <Image
          className='w-10 h-10 rounded-full mr-6'
          src='/user/user.png'
          alt='Rounded avatar'
          width={50}
          height={50}
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
        {/* <Post
          user='New User'
          caption={'Another Post'}
          image='/14.jpeg'
          time={'17 Apr 2022'}
        /> */}
      </div>
    </section>
  );
}
