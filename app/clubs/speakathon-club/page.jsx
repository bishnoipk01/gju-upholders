import ClubHeader from '@/components/clubHeader';
import CoreMembers from '@/components/coreMembers';

export default function GjustCoders() {
  return (
    <section>
      <ClubHeader clubName={'SPEAKATHON CLUB'} />;
      <div
        id='about'
        className='flex justify-center items-center flex-col p-6 m-4 border-2 border-red-100 shadow-md w-1/2 mx-auto'
      ></div>
      <div id='club-members'>
        <CoreMembers />
      </div>
      <div className=' container mx-auto flex justify-between border-2 border-green-100 p-4 mb-10'>
        <div id='club-works' className='border-2 border-red-100 p-4'>
          {' '}
          all the recent work done by club
        </div>
        <div id='announcement' className='border-2 border-yellow-100 p-4'>
          latest announcement with links to register
        </div>
      </div>
      <div
        id='commentSection'
        className='border-2 border-sky-100 p-10 bg-green-50 mb-10'
      >
        {' '}
        commentSection
      </div>
    </section>
  );
}
