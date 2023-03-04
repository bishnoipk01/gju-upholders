'use client';
import Header from '@/components/header';
import HomeBlog from '@/components/HomeBlogs';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <HomeBlog />
    </main>
  );
}
