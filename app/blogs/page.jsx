'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const getBlogs = async () => {
  try {
    const res = await fetch('/api/blogs/get-all');
    const blogs = await res.json();
    return blogs.data;
  } catch (err) {
    console.log(err);
  }
};

export default function Blogs() {
  const [blog, setBlogs] = useState([]);
  useEffect(
    () => async () => {
      const data = await getBlogs();
      setBlogs(data);
    },
    []
  );
  return (
    <section className='container mx-auto'>
      <div className='flex justify-between bg-red-100 p-2 rounded mb-4'>
        <h1 className='heading-2'>Blogs</h1>
      </div>
      {blog?.map((blog) => {
        return (
          <Link
            href={`/blogs/${blog.id}`}
            key={blog.id}
            className='block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-6'
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {blog.title}
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              {blog.description?.substring(0, 100)}
            </p>
          </Link>
        );
      })}
    </section>
  );
}
