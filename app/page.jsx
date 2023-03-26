'use client';
import FeaturesHome from '@/components/featureSection';
import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <FeaturesHome />
    </main>
  );
}
