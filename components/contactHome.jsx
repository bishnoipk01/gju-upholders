import Image from 'next/image';
import Link from 'next/link';

export default function ContactHome() {
  return (
    <div className="py-12 px-4 bg-gray-800">
      <div className="w-full flex justify-center">
        <div className="w-full md:w-11/12 xl:w-full bg-gradient-to-r from-teal-500 to-teal-600 md:py-10 md:px-8 px-6 py-6 xl:px-16 xl:py-20 rounded-xl shadow-2xl transition-all hover:scale-105">
          <div className="flex flex-wrap items-center justify-between">
            {/* Text Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Have something on your mind? <br />
                Or just want to suggest something?
              </h1>
              <p className="text-lg text-teal-100 mb-6">
                We&apos;re always open to hearing your thoughts and ideas. Feel free to
                reach out to us anytime. We&apos;d love to connect!
              </p>
              <Link
                href="/contact"
                className="py-2 w-1/3 text-center bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-700 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none"
              >
                Contact Us
              </Link>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <Image
                height={400}
                width={400}
                src="/22.svg"
                alt="Contact us"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
