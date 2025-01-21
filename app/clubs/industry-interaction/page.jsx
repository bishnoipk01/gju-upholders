import ClubMembers from '@/components/clubMembers';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubWork from '@/components/clubWork';

export default function IndustryInteraction() {
  return (
    <section className="m-0 p-0 flex flex-col items-stretch">
      {/* Club Header */}
      <ClubHeader clubName={'Industry-Interaction Club'} />

      {/* Club Members */}
      <div
        id="recent-work"
        className="p-8 bg-gradient-to-br  text-white"
      >
        <ClubMembers
          clubheading={
            'Meet our Industry Interaction Club team members who work on bridging the gap between academia and industry by organizing impactful events and webinars.'
          }
          cordinator={{
            image: '/industry_interaction_coordinator.jpg',
            name: 'Monika Sihag',
            dept: 'M.Sc.(Chemistry)',
          }}
          jointCordinator={{
            image: '/user.png',
            name: 'Ashok Jangra',
            dept: 'M.Pharmacy',
          }}
          member1={{
            image: '/ved_prakash_jc_iip_club.jpeg',
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
            position: 'Dept. IIP Coordinator',
          }}
          member4={{
            image: '/user.png',
            name: 'Roshan Lal',
            dept: 'B.Tech(PTG)',
            position: 'Joint Dept. IIP Coordinator',
          }}
        />
      </div>

      {/* Club Activities and Posters */}
      <div className="flex flex-col xl:flex-row border-t border-gray-600 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white gap-6 p-6">
        {/* Activities Section */}
        <div id="club-activities" className="flex-1">
          <ClubActivity
            clubname={'INDUSTRY '}
            activities={[
              {
                date: '15 February 2023',
                description: `A webinar on the topic "LinkedIn Profile and Portfolio Building". The keynote speaker was Rohit Ghumare, founder of Keep Up and developer advocate at solo.io.`,
                description2: `Prof. B.R. Kamboj, Vice-Chancellor of the University, emphasized the importance of maintaining a professional profile on platforms like LinkedIn and Twitter.`,
              },
              {
                date: '16 February 2023',
                description: `Dr. Minakshi Garg, with 15 years of R&D experience, was the keynote speaker. Around 70 students attended this insightful event.`,
                description2: `Dr. Garg discussed drug manufacturing regulatory processes and the work culture of R&D labs. Prof. Sumitra Singh, as Chief Guest, appreciated the efforts towards making students industry-ready.`,
              },
              {
                date: '25 February 2023',
                description: `Webinar on Scope for Chemistry Students in R&D, attended by over 25 students. The keynote speaker, Mr. Alekh Upadhyay, shared his industry insights.`,
                description2: `Mr. Upadhyay outlined career opportunities in R&D departments such as Chemical Research, Analytical Development, and Quality Assurance.`,
              },
            ]}
          />
        </div>

        {/* Posters Section */}
        <div id="club-posters" className="flex-1">
          <ClubWork
            club={'Industry Interaction'}
            poster1={{
              image: '/industry1.jpeg',
              name: 'Career Options for Chemists in Industries',
              date: 'March 04 2023',
            }}
            poster2={{
              image: '/industry2.jpg',
              name: 'Scopes for Chemistry Students in R&D Area',
              date: 'Feb 25 2023',
            }}
            poster3={{
              image: '/industry3.jpg',
              name: 'A Regulatory Perspective',
              date: 'Feb 16 2023',
            }}
            poster4={{
              image: '/industry4.jpg',
              name: 'LinkedIn Profile and Portfolio Building',
              date: 'Feb 15 2023',
            }}
          />
        </div>
      </div>

      {/* Comments Section */}
      <div
        id="comments"
        className="bg-gradient-to-tl from-gray-800 via-gray-900 to-black text-white p-6"
      >
        <ClubComments club={'industry-interaction'} />
      </div>
    </section>
  );
}
