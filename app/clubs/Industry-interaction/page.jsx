import ClubMembers from '@/components/clubMembers';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubWork from '@/components/clubWork';

export default function IndustryInteraction() {
  return (
    <section>
      <ClubHeader clubName={'IndustryInteraction'} />

      <div
        id='recent-work'
        className=' border-pink-200 p-8 flex-1 bg-violet-300'
      >
        <ClubMembers
          clubheading={''}
          cordinator={{
            image: '/industry interaction club coordinator.jpeg',
            name: 'Monika Sihag',
            dept: 'M.Sc.(chemistry)',
          }}
          jointCordinator={{
            image: '/user.png',
            name: 'Ashok Jangra',
            dept: 'M.Pharmacy',
          }}
          member1={{
            image: '/ved prakash jc iip club',
            name: 'Ved Parkash',
            dept: 'B.Tech(ECE)',
            position: 'Joint Coordinator',
          }}
          member2={{
            image: '/user.png',
            name: 'Muskan',
            dept: 'MBA Finance',
            position: 'Core Team Member',
          }}
          member3={{
            image: '/user.png',
            name: 'Vikash Bishnoi',
            dept: 'B.Tech(PTG)',
            position: 'Dept.IIP Cordinator',
          }}
          member4={{
            image: '/user.png',
            name: 'Roshan lal',
            dept: 'B.Tech(PTG)',
            position: 'Joint Dept.IIP Cordinator',
          }}
        />
      </div>
      <div className='flex  flex-col xl:flex-row border-2 border-pink-200 justify-between gap-4 mb-10 '>
        <div id='club-activities' className=' flex-1 '>
          <ClubActivity clubname={'GJUST-CODERS'} activities={[
            {date: '15 February 2023',
            description: ` A webinar on the
            topic "LinkedIn profile and portfolio
            building". Rohit Ghumare, founder of Keep
            Up and currently working as a developer
            advocate at solo.io was the keynote
            speaker of the webinar.`,

            description2:`Prof. B.R. Kamboj, ViceChancellor of the University, encouraged
            students to participate in such events and
            encouraged them to make and maintain a
            good professional profile on platforms like
            LinkedIn, Twitter, etc.
            `,
            
          },
          {
            date: '16 February 2023',
            description: `Dr.
            Minakshi Garg, who has 15 years of R&D
            experience in renowned pharmaceutical
            companies, was the keynote speaker and
            approx. 70 students attended the event.
            Prof. Sumitra Singh was the Chief Guest
            and Club Mentor Dr. Rekha Rao and Dr.
            Sunil Kumar were also present. Vice
            Chancellor Prof. B.R. Kamboj
            congratulated the department and
            placement cell for conducting such
            programmes to help make the students
            industry-aware and industry-ready.
            
            `,
            description2: `Dr. Minakshi Garg
            explained the process of approval of
            changes in drug manufacturing methods
            and packaging from the Regulatory
            Agencies of the USA and Europe. She also
            discussed how to review technology
            transfer documents, coaching and monitoring team members, and the
            work culture of R&D labs.`,
          },
          {
            date: '25 February 2023',
            description: `Webinar on Scope for Chemistry Students
            in R&D (Research and Development) Field
            for Chemistry Department students. The
            webinar was attended by more than 25
            students. IIP Club invited Industry Professionals to
            advise the students and share their
            industry experiences and concerns. The
            keynote speaker was Mr. Alekh Upadhyay.
            
            `,
            description2: `Mr. Alekh Upadhyay
            presented several R&D departments such
            as Chemical Research and Development, Analytical Development, and Quality
            Assurance, where chemistry students may
            establish a career.`,
          },
          ]} />
        </div>
        <div id='club-members' className=' flex-1 '>
          <ClubWork club={'IndustryInteraction'} poster1={{image:'/industry1.jpeg',name:`Career Options for chemists in industries`,date:`March 04 2023`}} poster2={{image:'/industry2.jpeg',name:`Scopes for chemistry students in R&D Area`,date:`FEB 25 2023`}}
          poster3={{image:'/industry3.jpeg',name:`A regulatory perspective`,date:`FEB 16 2023`}} poster4={{image:'/industry4.jpeg',name:`Linkedin Profile and Portfolio Building`,date:`FEB 15 2023`}}/>
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments club={'gjust-coders'} />
      </div>
    </section>
  );
}
