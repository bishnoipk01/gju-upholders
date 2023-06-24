'use client';
import { useState, useEffect } from 'react';
import ErrorCard from '@/components/errorCard';
import Post from '@/components/post';
import PostModal from '@/components/PostModal';
import PostBg from '@/public/post-bg.jpg';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(true);

  useEffect(
    () => async () => {
      const res = await fetch(
        `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/posts/`,
        {
          cache: 'no-cache',
        }
      );
      const posts = await res.json();
      setPosts(posts.data);
    },
    [modal]
  );

  function loadData() {
    setModal((state) => !state);
  }
  return (
    <section
      className=' bg-center bg-fixed bg-contain  h-screen w-screen overflow-hidden'
      style={{
        backgroundImage: `url(${PostBg.src})`,
      }}
    >
      <div className='mx-auto w-full lg:max-w-[50vw]'>
        <PostModal loadData={loadData} />
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
                avatar={post.avatar}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
