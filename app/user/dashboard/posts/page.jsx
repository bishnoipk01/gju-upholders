'use client';

import ErrorCard from '@/components/errorCard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import DashPost from '@/components/DashPost';
import { useToast } from '@/utils/Toast'; // Custom hook for toast notifications

const getPosts = async (id) => {
  try {
    if (!id) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/posts`,
      {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const posts = await res.json();
    return res.status === 200 ? posts.data : null;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default function PostCreated() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(null);
  const router = useRouter();
  const { showToast } = useToast();

  useEffect(() => {
    if (session?.user.id) {
      getPosts(session.user.id).then((posts) => {
        setPosts(posts || []);
        setLoading(false);
      });
    }
  }, [state, session]);

  const refreshPage = () => {
    setState((prev) => !prev);
    router.refresh();
  };

  const confirmDelete = (id) => {
    setShowConfirmDelete(id);
  };

  const deletePost = async (id) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
        method: 'DELETE',
      });
      setShowConfirmDelete(null);
      refreshPage();
      showToast('Post deleted successfully!', 'red');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="w-full bg-gray-800 text-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="z-10 top-0 h-16 border-b border-gray-700 py-2.5">
    <div className="px-6 flex items-center justify-between space-x-4">
      <h5 hidden className="text-3xl font-bold lg:block">All User Posts</h5>
    </div>
  </div>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {loading ? "" : posts.length === 0 ? (
          <div>
            <ErrorCard message="\tNo posts found" />
          </div>
        ) : (
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="flex flex-col bg-gray-800 p-4 rounded-lg shadow-md">
                <DashPost
                  caption={post.caption}
                  image={post.image}
                  time={post.createdAt}
                />
                {showConfirmDelete === post.id ? (
                  <div className="bg-gray-700 p-4 rounded-lg mt-4 text-center">
                    <p className="text-gray-300">
                      Are you sure you want to delete this post?
                    </p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                        onClick={() => deletePost(post.id)}
                      >
                        Yes, Delete
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
                        onClick={() => setShowConfirmDelete(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md flex items-center justify-center mx-auto"
                    onClick={() => confirmDelete(post.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
