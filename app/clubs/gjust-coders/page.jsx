import ClubMembers from '@/components/clubMembers';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubWork from '@/components/clubWork';

export default function GjustCoders() {
  return (
    <section>
      <ClubHeader clubName={'GJUST-CODERS'} />

      <div
        id='recent-work'
        className=' border-pink-200 p-8 flex-1 bg-violet-300'
      >
        <ClubMembers
          clubheading={''}
          cordinator={{
            image: '/user.png',
            name: '',
            dept: '',
          }}
          jointCordinator={{
            image: '/user.png',
            name: '',
            dept: '',
          }}
          member1={{
            image: '/user.png',
            name: '',
            dept: '',
            position: '',
          }}
          member2={{
            image: '/user.png',
            name: '',
            dept: '',
            position: '',
          }}
          member3={{
            image: '/user.png',
            name: '',
            dept: '',
            position: '',
          }}
          member4={{
            image: '/user.png',
            name: '',
            dept: '',
            position: '',
          }}
        />
      </div>
      <div className='flex  flex-col xl:flex-row border-2 border-pink-200 justify-between gap-4 mb-10 '>
        <div id='club-activities' className=' flex-1 '>
          <ClubActivity clubname={'GJUST-CODERS'} activities={[]} />
        </div>
        <div id='club-members' className=' flex-1 '>
          <ClubWork />
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments club={'gjust-coders'} />
      </div>
    </section>
  );
}
