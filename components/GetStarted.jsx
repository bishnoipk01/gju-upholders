import Image from 'next/image';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <section
      className="text-white bg-gray-800"
      id="get-started"
      aria-labelledby="get-started-title"
    >
      <div className="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        {/* Text Section */}
        <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left">
          <h1
            id="get-started-title"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Get started <br />
            <span className="text-teal-600">With us</span>
          </h1>
          <p className="mt-6 mb-8 text-teal-100 text-lg sm:mb-12">
            A platform created by students, for the students of the University. 
            Join us to help improve it further. <br className="hidden md:inline lg:hidden" />
            For more details, check out our{' '}
            <Link
              href="/privacy-policy"
              className="text-teal-600 underline hover:text-teal-800"
            >
              Privacy and Security Policy
            </Link>.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              href="/user/login"
              className="px-8 py-3 text-lg font-semibold text-gray-50 bg-teal-600 rounded shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Log in
            </Link>
            <Link
              href="/user/register"
              className="px-8 py-3 text-lg font-semibold border border-gray-800 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[32rem]">
          <Image
            src="/1.svg"
            alt="Illustration of collaboration and productivity"
            className="object-contain"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}
