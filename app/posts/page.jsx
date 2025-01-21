'use client';
import { useState, useEffect } from 'react';
import ErrorCard from '@/components/errorCard';
import Post from '@/components/post';
import PostModal from '@/components/PostModal';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(true);
  const [loading, setLoading] = useState(true);

  const getPosts = async function () {
    setLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/`, {
      cache: 'no-cache',
    });
    if (!res.ok) setPosts(null);
    const posts = await res.json();
    setPosts(posts.data);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, [modal]);

  function loadData() {
    setModal((state) => !state);
  }

  return (
    <section className='bg-gray-800 text-white min-h-screen flex flex-col items-center'>
      <div className='mx-auto w-full lg:max-w-[50vw] p-6'>
        <PostModal loadData={loadData} />

        {/* Posts container */}
        <div id='main' className='flex flex-col space-y-6'>
          {posts === null ? (
            <ErrorCard message="Unable to load data. Please try again..." />
          ) : (
            ''
          )}

          {loading ? (
            <div className='text-center text-gray-400'>Loading posts...</div>
          ) : posts.length ? (
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
          ) : (
            <ErrorCard message="No posts found" />
          )}
        </div>
      </div>
    </section>
  );
}
