import Aptitude_club from '@/components/Aptitude_club';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubMembers from '@/components/clubMember';

export default function GjustCoders() {
  return (
    <section>
      <ClubHeader clubName={'APTITUDE CLUB'} />

      <div
        id='recent-work'
        className=' border-pink-200 p-8 flex-1 bg-violet-300'
      >
        <Aptitude_club />
      </div>
      <div className='flex  flex-col md:flex-row border-2 border-pink-200 justify-between gap-4 mb-10 '>
        <div id='club-activities' className=' flex-1 '>
          <ClubActivity />
        </div>
        <div id='club-members' className=' flex-1 '>
          <ClubMembers />
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments club={'aptitude-club'} />
      </div>
    </section>
  );
}
