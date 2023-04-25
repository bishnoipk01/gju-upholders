import EachClub from '@/components/EachClub';
import Content from '../testit/page';

export default function Clubs() {
  return (
    <section>
      <EachClub
        clubName={'SPEAKATHON CLUB'}
        clubInfo={
          'Speakathon are events clubs create to allow the members to do more speeches and long form speeches that cannot be done during a regular meeting.'
        }
        feature1={'Fortnightly GD Series.'}
        feature2={'Monthly Debate.'}
        feature3={'Monthly Mock Interviews.'}
        feature4={'Story Telling Competitions.'}
        image={'/speakathon.png'}
      />
      <EachClub 
      clubName={`GJUST CODER'S`}
        clubInfo={
          'At Coders Club, the students apply computer programming concepts in solving real life problems.'
        }
        feature1={'Monthly Coding Competition'}
        feature2={'Projectathons & Hackathons'}
        feature3={'Peer level Mentoring'}
        feature4={'Coding Classes through codechef & Coding Ninjas'}
        image={'/GJUST-CODERS.svg'} />
      <EachClub 
      clubName={'APTITUDE CLUB'}
      clubInfo={
        'The Aptitude Training is absolute vital for students, as the first round conducted by most of the reputed companies is an Aptitude Test, to test their Quantitative and Logical Abilities.'
      }
      feature1={'Aptitude Training classes'}
      feature2={'Weekly online Aptitude Test (GWOAT) on Winuall platform'}
      feature3={'Offline Aptitude (Physical GWOAT)'}
      feature4={'Certificate & Prizes'}
      image={'/aptitude_final.svg'}/>
      <EachClub 
      clubName={'UDBHAVANA CLUB'}
      clubInfo={
        'By this club we will learn soft skills. Soft skills are an essential part of improving one’s ability to work with others and can have a positive influence on furthering your career.'
      }
      feature1={'Soft Skill Training Programs'}
      feature2={'Life Skills Talk shows'}
      feature3={'Technical Training Programs'}
      feature4={'Resume Building Workshops'}
      image={'/udbhavna.png'}/>
      <EachClub 
      clubName={'INDUSTRY INTERACTION CLUB'}
      clubInfo={
        'Here students will learn how to make connections with recruiters on online platforms like LinkedIn. Professional connections are an excellent way to find new career opportunities.'
      }
      feature1={'Expert Lectures Of industry people'}
      feature2={'Industrial Visits'}
      feature3={'LinkedIn profile and Portfolio building'}
      feature4={'How to present yourself'}
      image={'/interaction_club-s.svg'}/>
      <EachClub 
      clubName={'ENTREPRENEURSHIP CLUB'}
      clubInfo={
        'The Club aims to help students to cultivate a startup business idea, teach them basic strategies like estimating costs and writing a business plan, and help them network their ideas toward sources of funding.'
      }
      feature1={'Startup business idea'}
      feature2={'Cultivate the Entrepreneurship skills'}
      feature3={'Expert lectures and Seminars'}
      feature4={'Securing financial and legal help from alumni '}
      image={'/entrepreneurship_club.svg'}/>
    </section>
  );
}
