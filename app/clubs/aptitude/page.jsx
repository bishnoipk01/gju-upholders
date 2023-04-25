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
      <div id='club-members' className=' container mx-auto mb-10'>
        <ClubMembers />
      </div>
      <div className='flex border-2 border-green-50 justify-between gap-4 mb-10 '>
        <div
          id='club-activities'
          className='border-2 border-sky-500 p-8 flex-1 bg-green-200'
        >
          club activities
        </div>
        <div
          id='recent-work'
          className='border-2 border-green-500 p-8 flex-1 bg-sky-200'
        >
          recent work
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments />
      </div>
    </section>
  );
}
