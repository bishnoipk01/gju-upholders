import ClubMembers from '@/components/clubMembers';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubWork from '@/components/clubWork';

export default function Udbhavna() {
  return (
    <section>
      <ClubHeader clubName={'UDBHAVNA CLUB'} />

      <div
        id='recent-work'
        className=' border-pink-200 p-8 flex-1 bg-violet-300'
      >
        <ClubMembers
          clubheading={''}
          cordinator={{
            image: '/udbhavna club coordinator.png',
            name: 'Arzoo Dhaka',
            dept: 'B.sc.(Economics)',
          }}
          jointCordinator={{
            image: '/parul jc udbhavna club.jpeg',
            name: 'Parul',
            dept: 'MBA Finance',
          }}
          member1={{
            image: '/user.png',
            name: 'Rajeev Nehra',
            dept: 'B.Tech(IT)',
            position: 'Advertisment Team Member',
          }}
          member2={{
            image: '/user.png',
            name: 'Nitika',
            dept: 'B.tech',
            position: 'Poster Team Member',
          }}
          member3={{
            image: '/user.png',
            name: 'Abhishek',
            dept: 'B.Tech',
            position: 'Technical Assistance',
          }}
          member4={{
            image: '/user.png',
            name: 'Kashish',
            dept: 'M.Pharmacy',
            position: 'Registration Team member',
          }}
        />
      </div>
      <div className='flex  flex-col xl:flex-row border-2 border-pink-200 justify-between gap-4 mb-10 '>
        <div id='club-activities' className=' flex-1 '>
          <ClubActivity clubname={'UDBHAVNA'} activities={[  {
                date: '23 February 2023',
                description: `Orientation program
                by Bhabha Atomic Research Centre
                (BARC) about its popular OCES
                (Orientation course for Engineering
                Graduates and Science Postgraduates)
                program in Ch. Ranbir Singh Auditorium. Registrar Prof. Avnesh Verma was the
                chief guest and Dr. R.S. Barwal was the
                guest of honour. Senior Scientific officers
                from the Chemistry Division of BARC Dr.
                Pramod Sharma & Dr. Satyapriya R.
                Sreejith were the keynote speakers. `,
              },
              {
                description: `Partap
                Singh, Director(Placement) greeted all the
                dignitaries and audience and Dr. R.S.
                Barwal encouraged students to work hard
                for admission to BARC School Training,
                while Dr. Ravita shared her journey of
                OCES exam to BARC.`,
                description2: `Dr. Pramod Sharma and Dr. Satyapriya R.
                Sreejith explained the OCES and DGFS
                exam process, eligibility criteria, portal for
                registration, syllabus, exam pattern,
                interview process and preparation
                mechanism, training after selection, salary
                package and additional benefits provided
                to scientific officers respectively. OCES
                online exams will be held on 1st & 2nd
                April 2023 followed by interview in MayJune 2023 and declaration of results by
                July 2023.
                `,
              },
              // {
              //   date: '16th - 25th January 2023',
              //   description: `Series started by T&P Cell of GJUS&T, Hisar with the objective
              //     of making it a practice test series for students staying at
              //     their homes through which they can brush up their aptitude
              //     test skills`,
              //   description2: `As chief guest, Prof. Avnesh Verma stated that such events
              //         should be held on a regular basis for the benefit of
              //         students. He went on to say that success is the
              //         consequence of our continual efforts and that learners
              //         should study hard to acquire aptitude abilities.`,
              // },
              ]} />
        </div>
        <div id='club-members' className=' flex-1 '>
          <ClubWork club={'udbhavna'}/>
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments club={'udbhavna'} />
      </div>
    </section>
  );
}
