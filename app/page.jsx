'use client';

import ClubsShort from '@/components/clubsShort';
import ContactHome from '@/components/contactHome';
import FeaturesHome from '@/components/featureSection';
import GetStarted from '@/components/GetStarted';
import Header from '@/components/header';
import AboutSection from '@/components/sectionAbout';
import { useSession } from 'next-auth/react';
import Footer from './footer';

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
    <main className="w-full bg-gray-800">
      {/* Hero Section */}
      <Header />

      {/* Features Section */}
      <section id="features" className="py-10">
        <FeaturesHome />
      </section>

      {/* Call to Action */}
      {!session?.user && (
        <section id="get-started" className="py-10">
          <GetStarted />
        </section>
      )}

      {/* Clubs Section */}
      <section id="clubs" className="py-10">
        <ClubsShort />
      </section>

      {/* About Section */}
      <section id="about" className="py-10">
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10">
        <ContactHome />
      </section>
    </main>
      <Footer />
      </>
  );
}
