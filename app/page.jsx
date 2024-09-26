'use client';
import ClubsShort from '@/components/clubsShort';
import ContactHome from '@/components/contactHome';
import FeaturesHome from '@/components/featureSection';
import GetStarted from '@/components/GetStarted';
import Header from '@/components/header';
import AboutSection from '@/components/sectionAbout';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  console.log("Commit from Aadi")
  return (
    <main>
      <Header />
      <FeaturesHome />
      {session?.user ? '' : <GetStarted />}
      <ClubsShort />
      <AboutSection />
      <ContactHome />
    </main>
  );
}
