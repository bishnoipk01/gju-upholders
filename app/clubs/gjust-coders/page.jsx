import ClubHeader from '@/components/clubHeader';

export default function GjustCoders() {
  return (
    <section>
      <ClubHeader clubName={'GJUST-CODERS'} />;
      <div
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
      </div>
      <div className='club-members'></div>
      <div className='club-works'></div>
      <dir></dir>
    </section>
  );
}
