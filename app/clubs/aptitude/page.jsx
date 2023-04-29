import Aptitude_club from '@/components/Aptitude_club';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubMembers from '@/components/clubMember';

export default function GjustCoders() {
  return (
    <section>
      <ClubHeader clubName={'APTITUDE CLUB'} />;
      {/* <div
        id='about'
        className='flex justify-center items-center flex-col p-6 m-4 border-2 border-red-100 shadow-md w-1/2 mx-auto'
      >
        <h2 className='text-xl font-semibold uppercase text-gray-800 mb-2'>
          The club for the coders
        </h2>
        <p className='text-base '>
          come and hang out with best coders of university. Share and gain
          valuable experience of working with others
        </p>
      </div> */}
      <div id='recent-work'
          className='border-2 border-pink-200 p-8 flex-1 bg-violet-300'>
      <Aptitude_club/>
      </div>
      <div className='flex border-2 border-pink-200 justify-between gap-4 mb-10 '>
        <div id='club-activities' className=' flex-1 '>
          <ClubActivity />
        </div>
        <div id='club-members' className=' flex-1 '
          
        >
          <ClubMembers />
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments club={'aptitude-club'} />
      </div>
    </section>
  );
}
