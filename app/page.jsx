'use client';
import ClubsShort from '@/components/clubsShort';
import FeaturesHome from '@/components/featureSection';
import GetStarted from '@/components/GetStarted';
import Header from '@/components/header';
import AboutSection from '@/components/sectionAbout';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <main>
      <Header />
      <FeaturesHome />
      {session?.user ? '' : <GetStarted />}
      <ClubsShort />
      <AboutSection />
    </main>
  );
}
