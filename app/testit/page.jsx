import EachClub from '@/components/EachClub';
import ImageText from '@/components/imageTextSide';
import AboutSection from '@/components/sectionAbout';
import TestFeatures from '@/components/testFeatures';
import Image from 'next/image';

export default function Content() {
  return (
    <>
      <ImageText />
      <EachClub />
      <TestFeatures />
    </>
  );
}
