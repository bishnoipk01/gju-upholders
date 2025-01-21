import ClubMembers from '@/components/clubMembers';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubWork from '@/components/clubWork';

export default function Udbhavna() {
  return (
    <section className='m-0 p-0 flex flex-col items-stretch'>
      <ClubHeader clubName={'UDBHAVNA CLUB'} />

      <div
        id='recent-work'
        className=' p-8 flex-1'
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
      <div className='flex  flex-col xl:flex-row justify-between gap-4 mb-10 '>
        <div id='club-activities' className=' flex-1 '>
          <ClubActivity
            clubname={'UDBHAVNA'}
            activities={[
              {
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
            ]}
          />
        </div>
        <div id='club-members' className=' flex-1 '>
          <ClubWork
            club={'UDBHAVNA CLUB'}
            poster1={{
              image: '/UDBHAVANA Club-5.jpeg',
              name: `Resume Building`,
              date: `NOV 19 2022`,
            }}
            poster2={{
              image: '/UDBHAVANA Club-3.jpeg',
              name: `Soft Skill Training`,
              date: `Oct 13-16 2022`,
            }}
            poster3={{
              image: '/UDBHAVANA Club-2.jpg',
              name: `Good Fitness for Good Health`,
              date: `Sept 28 2022`,
            }}
            poster4={{
              image: '/UDBHAVANA Club-3.jpeg',
              name: `Soft Skill Training`,
              date: `Oct 13-16 2022`,
            }}
          />
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments club={'udbhavna'} />
      </div>
    </section>
  );
}
