import Image from 'next/image';

export default function EachClub({ clubName, clubInfo, feature1, feature2, feature3, feature4, image }) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-8">
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-teal-500 sm:text-5xl sm:leading-none">
              {clubName}
            </h2>
            <p className="text-base text-gray-300 md:text-lg">{clubInfo}</p>
          </div>

          {/* Features Section */}
          <div>
            <p className="mb-4 text-lg font-semibold uppercase text-teal-400">
              Features
            </p>
            <div className="grid space-y-4 sm:gap-4 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="mr-3 text-teal-500">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {feature1}
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-teal-500">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {feature2}
                </li>
              </ul>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="mr-3 text-teal-500">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {feature3}
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-teal-500">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {feature4}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <Image
            className="object-cover rounded-lg shadow-lg"
            src={image}
            width={400}
            height={400}
            alt={clubName}
          />
        </div>
      </div>
    </div>
  );
}
