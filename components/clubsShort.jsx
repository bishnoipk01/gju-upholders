import Image from 'next/image';
import Link from 'next/link';

const ClubCard = ({ href, imgSrc, altText, clubName }) => (
  <Link href={href} aria-label={`View ${clubName}`} className="group">
    <div className="relative overflow-hidden transition-all duration-300 transform rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
      <div className="w-full h-80 md:h-96 xl:h-80 relative">
        <Image
          src={imgSrc}
          alt={altText}
          layout="fill" // Ensure the image fills the container
          objectFit="cover" // Keeps aspect ratio intact
          className="transition-all duration-300"
        />
      </div>
      {/* Add a darker overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
      <div className="absolute inset-x-0 bottom-0 px-6 py-3 bg-black bg-opacity-70">
        <p className="text-center text-white text-sm font-semibold uppercase tracking-wide">
          {clubName}
        </p>
      </div>
    </div>
  </Link>
);



export default function ClubsShort() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="px-6 py-14 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-10">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl">
              Clubs <br />
              <span className="text-teal-600">for your growth</span>
            </h2>
            <div className="h-1 w-20 mt-2 bg-teal-400"></div>
          </div>
          <p className="mt-4 lg:mt-0 text-lg text-teal-100 lg:max-w-md">
            Explore all the clubs and interact with peers. This platform brings
            students together under shared missions and provides all the
            information you need.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ClubCard
            href="/clubs/industry-interaction"
            imgSrc="/interaction_club.png"
            altText="Industry Interaction Club"
            clubName="Industry Interaction"
          />
          <ClubCard
            href="/clubs/aptitude"
            imgSrc="/aptitude-2.png"
            altText="Aptitude Club"
            clubName="Aptitude Club"
          />
          <ClubCard
            href="/clubs/udbhavna"
            imgSrc="/udbhavna.png"
            altText="Udbhavna Club"
            clubName="Udbhavna Club"
          />
          <ClubCard
            href="/clubs/speakathon"
            imgSrc="/speakathon.png"
            altText="Speakathon Club"
            clubName="Speakathon Club"
          />
        </div>
        <div className="text-center mt-10">
          <Link
            href="/clubs"
            aria-label="Explore all clubs"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-teal-600 rounded-lg shadow hover:bg-teal-700 transition duration-200"
          >
            See More Clubs
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M12.293 9.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 15H4a1 1 0 010-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
