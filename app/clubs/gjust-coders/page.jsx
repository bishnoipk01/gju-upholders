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
            image: '/coders-coordinator.jpeg',
            name: 'Jyoti',
            dept: 'CSE',
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
          <ClubActivity clubname={'GJUST-CODERS'} activities={[
            {date: '27 March 2023',
            description: `Azure Open Source Day in association with
            Reskill and Microsoft at Seminar Hall -1 CRS
            Auditorium, GJUS&T, Hisar for all the students
            of the university. Approximately 200 students
            attended the workshop. Sarthak Jain (Head of
            Community) at Reskill & and Siddharth Chopra
            (software engineer at optum) at Reskill were
            the keynote speakers.`,

            description2:`This event was
            supported by Microsoft Azure and Azure
            Developers Community and it was being run in
            India for the first time and only 20 colleges all
            over India were chosen to host it. Vice Chancellor Prof. Baldev Raj Kamboj
            congratulated the Coding club for holding this
            workshop for technical upskilling of the
            students. Registrar Prof. Avnesh Verma
            appealed to all students to make full use of all
            such programs & also congratulated the
            students for participating in the Workshop.`,
            
          },
          {
            // date: '22 Feb, 2023',
            description: `Keynote Speaker Siddharth Chopra
            had an interactive talk about various
            emerging trends in AI and possible future
            opportunities in AI technologies.
            Students also got to know about various
            trending AI tools and ways to access
            them and take benefit. He underlined
            that AI can help in reducing efforts and
            increasing productivity. Another Speaker
            Sarthak Jain had a discussion about other
            important aspects of student life like
            Hackathon, which would help them in
            achieving their future jobs.
            `,
            // description2: `The test was comprised of Quantitative aptitude, English
            //   Comprehension, Reasoning and General awareness. Total 100
            //   questions were to be done in 60 mins. The whole test was
            //   Coordinated by Pushkar Singla and the team of Aptitude Club`,
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
          <ClubWork club={'gjust-coders'} poster1={{image:'/GJUST-CODER.jpeg',name:`Game of Codes`,date:`April 25 2023`}} poster2={{image:'/coders.jpeg',name:``,date:``}}
          poster3={{image:'/coders.jpeg',name:``,date:``}} poster4={{image:'/coders.jpeg',name:``,date:``}}/>
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments club={'gjust-coders'} />
      </div>
    </section>
  );
}
