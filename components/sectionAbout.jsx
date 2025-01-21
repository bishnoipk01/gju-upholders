import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='bg-gray-800 py-8 px-4 mx-auto max-w-screen-xl'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-16 items-center lg:py-16'>
        <div className='font-light text-gray-300 sm:text-lg'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-teal-400'>
            About Us
          </h2>
          <p className='mb-4 text-teal-100'>
            With our platform, we aim to provide a single place for all clubs in
            our university to manage and provide updates to club members and
            students. When it comes to getting information and answers to
            questions, it can be a bit of a gray area. You can find answers and
            share insights.
          </p>
          <p className='text-teal-100'>
            In addition to answering questions, you can also post photos and
            other updates to the website to keep everyone informed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
  {/* Image 1 with dark overlay */}
  <div className="relative">
    <Image
      height={400}
      width={400}
      className="w-full rounded-lg"
      src="/about-us.jpg"
      alt="A club event gathering students"
      priority
    />

  </div>

  {/* Image 2 with dark overlay */}
  <div className="relative">
    <Image
      height={400}
      width={400}
      className="mt-4 w-full lg:mt-10 rounded-lg"
      src="/about-us-2.jpg"
      alt="Club members interacting and collaborating"
      priority
    />
  </div>
</div>

      </div>
    </section>
  );
}
