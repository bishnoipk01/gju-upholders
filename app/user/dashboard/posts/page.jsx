'use client';
import ErrorCard from '@/components/errorCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import DashPost from '@/components/DashPost';

const getPosts = async (id) => {
  try {
    if (id === undefined) return [];
    const res = await fetch('/api/users/posts', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const posts = await res.json();
    if (res.status !== 200) return null;
    return posts.data;
  } catch (err) {
    console.log(err);
  }
};

export default function PostCreated() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const [state, setState] = useState(false);

  useEffect(() => {
    getPosts(session?.user.id).then((posts) => {
      console.log(posts);
      setPosts(posts);
    });
  }, [state, session]);

  const refreshPage = () => {
    setState((state) => !state);
    router.refresh();
  };

  async function deletePost(id) {
    await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    refreshPage();
  }

  return (
    <div className=' w-full'>
      <div className=' z-10 top-0 h-16 border-b bg-white py-2.5'>
        <div className='px-6 flex items-center justify-between space-x-4 2xl:container'>
          <h5 hidden className='text-3xl text-blue-400 font-bold lg:block'>
            Posts
          </h5>
        </div>
      </div>
      <div className=' min-h-[80vh] bg-slate-100'>
        {posts ? (
          ''
        ) : (
          <ErrorCard message={`\tUnable to load data try again..`} />
        )}
        <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          {posts.length ? (
            posts.map((post) => {
              return (
                <div className='flex flex-col' key={post.id}>
                  <DashPost
                    caption={post.caption}
                    image={post.image}
                    time={post.createdAt}
                  />
                  <button
                    className='inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md mx-auto w-3/12'
                    onClick={deletePost.bind(this, post.id)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mr-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                      />
                    </svg>
                    <span className='hidden sm:block'>Delete</span>
                  </button>
                </div>
              );
            })
          ) : (
            <ErrorCard message={'\tno data found'} />
          )}
        </div>
      </div>
    </div>
  );
}
