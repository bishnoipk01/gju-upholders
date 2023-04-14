import aboutBg from '@/public/about-us.jpg';

export default function AboutSection() {
  return (
    <section className='bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center'>
      <div className='overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl'>
        <div className='lg:w-1/2'>
          <div
            className='h-64 lg:h-full bg-center bg-contain bg-no-repeat'
            style={{
              backgroundImage: `url(
                ${aboutBg.src}
              )`,
            }}
          ></div>
        </div>

        <div className='max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2'>
          <h2 className='text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            Build Your New <span className='text-blue-500'>Idea</span>
          </h2>

          <p className='mt-4 text-gray-500 dark:text-gray-300'>
            With our platform, we aim to provide a single place for all clubs in
            our university to manage and provide updates to club members and
            students. When it comes to getting information and answers to
            questions, it can be a bit of a gray area. you can answer a
            question. But there’s a whole lot more you can do as well. In
            addition to answering the question, you can follow the individual
            question, despite what topic it resides in
          </p>

          {/* <div className='inline-flex w-full mt-6 sm:w-auto'>
            <a
              href='#'
              className='inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80'
            >
              Start Now
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
