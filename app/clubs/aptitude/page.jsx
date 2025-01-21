import ClubMembers from '@/components/clubMembers';
import ClubActivity from '@/components/clubActivity';
import ClubComments from '@/components/clubComment';
import ClubHeader from '@/components/clubHeader';
import ClubWork from '@/components/clubWork';

export default function AptitudeClub() {
  return (
    <section className="bg-gray-900 text-gray-100 m-0 p-0 flex flex-col items-stretch">
      {/* Header Section */}
      <ClubHeader clubName={'APTITUDE CLUB'} />

      {/* Members Section */}
      <div id="recent-work" className="py-12 bg-gray-800">
        <div className="container mx-auto px-8">
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
              name: 'Komal',
              dept: 'M.Sc.(Bio Technology)',
              position: 'Poster Team Member',
            }}
            member2={{
              image: '/user.png',
              name: 'Monika',
              dept: 'MCA',
              position: 'Poster Team Member',
            }}
            member3={{
              image: '/user.png',
              name: 'Sourabh',
              dept: 'B.tech (EE)',
              position: 'Certificate Team Member',
            }}
            member4={{
              image: '/user.png',
              name: 'Payal',
              dept: 'M.Sc.(Microbiology)',
              position: 'Testing Team Member',
            }}
          />
        </div>
      </div>

      {/* Activities and Posters Section */}
      <div className="flex flex-col xl:flex-row gap-8 bg-gray-900 py-16">
        {/* Club Activities */}
        <div id="club-activities" className="flex-1 px-8">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            Club Activities
          </h3>
          <ClubActivity
            clubname={'APTITUDE'}
            activities={[
              {
                date: 'June, 2020',
                description: `Series started by T&P Cell of GJUS&T, Hisar with the objective of making it a practice test series for students staying at their homes through which they can brush up their aptitude test skills`,
              },
              {
                date: '22 Feb, 2023',
                description: `An Offline Aptitude test named PHYSICAL GWOAT was conducted by Aptitude Club. In that test around 80 students participated and tested their Aptitude Skills`,
                description2: `The test was comprised of Quantitative aptitude, English Comprehension, Reasoning, and General awareness. Total 100 questions were to be done in 60 mins. The whole test was Coordinated by Pushkar Singla and the team of Aptitude Club`,
              },
              {
                date: '16th - 25th January 2023',
                description: `Series started by T&P Cell of GJUS&T, Hisar with the objective of making it a practice test series for students staying at their homes through which they can brush up their aptitude test skills`,
                description2: `As chief guest, Prof. Avnesh Verma stated that such events should be held on a regular basis for the benefit of students. He went on to say that success is the consequence of our continual efforts and that learners should study hard to acquire aptitude abilities.`,
              },
            ]}
          />
        </div>

        {/* Club Posters */}
        <div id="club-members" className="flex-1 px-8">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            Recent Posters
          </h3>
          <ClubWork
            club={'APTITUDE CLUB'}
            poster1={{
              image: '/GWOAT POSTER 3.0-32.jpeg',
              name: `Test-32`,
              date: `April 26 2023`,
            }}
            poster2={{
              image: '/GWOAT POSTER 3.0-31.jpeg',
              name: `Test-31`,
              date: `April 19 2023`,
            }}
            poster3={{
              image: '/GWOAT POSTER 3.0-30.jpeg',
              name: `Test-30`,
              date: `April 12 2023`,
            }}
            poster4={{
              image: '/GWOAT POSTER 3.0-29.jpeg',
              name: `Test-29`,
              date: `April 05 2023`,
            }}
          />
        </div>
      </div>

      {/* Comments Section */}
      <div id="comments" className="bg-gray-800 py-12">
        <div className="container mx-auto px-8">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">
            Comments
          </h3>
          <ClubComments club={'aptitude-club'} />
        </div>
      </div>
    </section>
  );
}
