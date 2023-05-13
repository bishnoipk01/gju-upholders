import ClubMembers from '@/components/clubMembers';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubWork from '@/components/clubWork';

export default function AptitudeClub() {
  return (
    <section>
      <ClubHeader clubName={'APTITUDE CLUB'} />

      <div
        id='recent-work'
        className=' border-pink-200 p-8 flex-1 bg-violet-300'
      >
        <ClubMembers
          clubheading={
            'Meet our Aptitude club Team members. GWOAT (GJUS&T WEEKLY ONLINE APTITUDE TEST) is the activity by Aptitude Club'
          }
          cordinator={{
            image: '/aptitude_coordinator.jpg',
            name: 'Pushkar Singla',
            dept: 'B.Tech (IT)',
          }}
          jointCordinator={{
            image: '/user.png',
            name: 'Vivek',
            dept: 'B.Tech (EE)',
          }}
          member1={{
            image: '/user.png',
            name: 'komal',
            dept: 'M.Sc.(Bio Technology)',
            position: 'Poster Team',
          }}
          member2={{
            image: '/user.png',
            name: 'Monika',
            dept: 'MCA',
            position: 'Poster Team',
          }}
          member3={{
            image: '/user.png',
            name: 'Sourabh',
            dept: 'B.tech (EE)',
            position: 'Certificate Team',
          }}
          member4={{
            image: '/user.png',
            name: 'Payal',
            dept: 'M.Sc.(Microbiology)',
            position: 'Testing Team',
          }}
        />
      </div>
      <div className='flex  flex-col xl:flex-row border-2 border-pink-200 justify-between gap-4 mb-10 '>
        <div id='club-activities' className=' flex-1 '>
          <ClubActivity
            clubname={'APTITUDE'}
            activities={[
              {
                date: 'June, 2020',
                description: `Series started by T&P Cell of GJUS&T, Hisar with the objective
                  of making it a practice test series for students staying at
                  their homes through which they can brush up their aptitude
                  test skills`,
              },
              {
                date: '22 Feb, 2023',
                description: `An Offline Aptitude test named PHYSICAL GWOAT was conducted by
                  Aptitude Club. In that test around 80 students participated
                  and tested their Aptitude Skills`,
                description2: `The test was comprised of Quantitative aptitude, English
                  Comprehension, Reasoning and General awareness. Total 100
                  questions were to be done in 60 mins. The whole test was
                  Coordinated by Pushkar Singla and the team of Aptitude Club`,
              },
              {
                date: '16th - 25th January 2023',
                description: `Series started by T&P Cell of GJUS&T, Hisar with the objective
                  of making it a practice test series for students staying at
                  their homes through which they can brush up their aptitude
                  test skills`,
                description2: `As chief guest, Prof. Avnesh Verma stated that such events
                      should be held on a regular basis for the benefit of
                      students. He went on to say that success is the
                      consequence of our continual efforts and that learners
                      should study hard to acquire aptitude abilities.`,
              },
            ]}
          />
        </div>
        <div id='club-members' className=' flex-1 '>
          <ClubWork />
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments club={'aptitude-club'} />
      </div>
    </section>
  );
}
