import ClubHeader from '@/components/clubHeader';

export default function GjustCoders() {
  return (
    <section>
      <ClubHeader clubName={'SPEAKATHON CLUB'} />;
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
      <div
        id='club-members'
        className='bg-sky-50 p-8 border-2 border-red-100 container mx-auto mb-10'
      >
        club members and cordinators
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
      <div
        id='comments'
        className='border-2 border-violet-300 p-10 bg-gray-300'
      >
        comments
      </div>
    </section>
  );
}
