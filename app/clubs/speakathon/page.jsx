import ClubMembers from '@/components/clubMembers';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubWork from '@/components/clubWork';

export default function Speakathon() {
  return (
    <section className='m-0 p-0 flex flex-col items-stretch'>
      <ClubHeader clubName={'SPEAKATHON CLUB'} />

      <div
        id='recent-work'
        className=' p-8 flex-1'
      >
        <ClubMembers
          clubheading={''}
          cordinator={{
            image: '/coordinator speakathon club.jpeg',
            name: 'Deepak',
            dept: 'B.Tech(IT)',
          }}
          jointCordinator={{
            image: '/joint coordinator speakathon.jpeg',
            name: 'Amit Kumar',
            dept: '',
          }}
          member1={{
            image: '/user.png',
            name: 'Parkash Kumar jha',
            dept: 'B.Tech(ECE)',
            position: '',
          }}
          member2={{
            image: '/user.png',
            name: 'Barkha',
            dept: 'MBA Finance',
            position: '',
          }}
          member3={{
            image: '/user.png',
            name: 'Lalit',
            dept: 'M.Pharmacy',
            position: '',
          }}
          member4={{
            image: '/user.png',
            name: 'Deepanshu',
            dept: 'B.Tech(IT)',
            position: '',
          }}
        />
      </div>
      <div className='flex  flex-col xl:flex-row justify-between gap-4 mb-10 '>
        <div id='club-activities' className=' flex-1 '>
          <ClubActivity clubname={'SPEAK'} activities={[ {
                date: '26 January 2023',
                description: `Story telling competition held on the theme of "PEOPLE WHO
                MADE INDIA IN THE LAST 76 YEARS". Over 25
                students from various courses narrated their
                stories and the audience kept them
                motivated. Prof. Sujata Sanghi mam was impressed with
                the club's efforts to improve communication
                skills and remove stage fear `,
              },
              {
                date: '27 February 2023',
                description: `Debate competition on the topic
                "Is Freebie culture in Indian politics against
                basic principles of democracy". Approx 25
                students participated in the event. The Jury
                Panel consisted of Dr. Komal Dhanda from
                HSB department, Sh. Bijender Kaushik from
                Printing Technology and Ms. Monika Sihag.`,
                description2: `Vice Chancellor Prof. B.R. Kamboj
                appreciated the efforts of Sepakathon Club
                for providing platforms to students for
                communication skill enhancement. He also
                appealed to students to participate more
                in such activities.`,
              },
              {
                date: '6 March 2023',
                description: `3 - Days leadership developement workshop held for
                all coordinators of T&P CELL. Prof. Avnesh Verma, Registrar was the chief
                guest of the valedictory function organized
                in T&P Cell of the University. Pankaj Asija,
                Leadership Mindset Strategist, Business
                Motivational Speaker & Director, PSEL was
                the keynote speaker of the workshop.
                `,
                description2: `Dr. Aditya Vir Singh, Assistant Director
                shared that sessions were also presided
                over by Prof. Umesh Arya, Dean, Faculty of
                Media Studies on Intra-personal
                communication and by Dr. Jitender from
                Wisdom of Minds on Brain Activation. 73
                students completed this workshop.
                `,
              },]} />
        </div>
        <div id='club-members' className=' flex-1 '>
          <ClubWork club={'SPEAKATHON CLUB'} poster1={{image:'/speakathon1.jpeg',name:`GD`,date:`April 27 2023`}} poster2={{image:'/speakathon2.jpeg',name:`GD`,date:`April 13 2023`}}
          poster3={{image:'/speakathon3.jpeg',name:`GD`,date:`March 23 2023`}} poster4={{image:'/speakathon4.jpeg',name:`GD`,date:`March 08 2023`}} />
        </div>
      </div>
      <div id='comments' className=''>
        <ClubComments club={'SPEAKATHON'} />
      </div>
    </section>
  );
}
