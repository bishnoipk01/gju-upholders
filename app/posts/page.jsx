'use client';
import { useState, useEffect } from 'react';
import ErrorCard from '@/components/errorCard';
import Post from '@/components/post';
import PostModal from '@/components/PostModal';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () => async () => {
      const res = await fetch('/api/posts/');
      const posts = await res.json();
      setPosts(posts.data);
    },
    []
  );
  return (
    <section className='mx-auto  w-full lg:max-w-[50vw]'>
      <PostModal />
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
