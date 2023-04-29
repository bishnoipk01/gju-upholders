export default function ClubActivity() {
  return (
    <section className='dark:bg-gray-800 dark:text-gray-100'>
      <div className='container max-w-5xl px-4 py-12 mx-auto'>
        <div className='grid gap-4 mx-4 sm:grid-cols-12'>
          <div className='col-span-12 sm:col-span-3'>
            <div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400'>
              <h3 className='text-3xl font-semibold'>
                APTITUDE CLUB ACTIVITES
              </h3>
              {/* <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span> */}
            </div>
          </div>
          <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
            <div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700'>
              <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400'>
                <h3 className='text-xl font-semibold tracking-wide'>
                  {' '}
                  June, 2020{' '}
                </h3>
                {/* <time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2020</time> */}
                <p className='mt-3 text-lg'>
                  Series started by T&P Cell of GJUS&T, Hisar with the objective
                  of making it a practice test series for students staying at
                  their homes through which they can brush up their aptitude
                  test skills.{' '}
                </p>
              </div>
              <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400'>
                <h3 className='text-xl font-semibold tracking-wide'>
                  22 Feb, 2023
                </h3>
                {/* <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2019</time> */}
                <p className='mt-3 text-lg'>
                  An Offline Aptitude test named PHYSICAL GWOAT was conducted by
                  Aptitude Club. In that test around 80 students participated
                  and tested their Aptitude Skills.
                </p>
                <p className='mt-3 text-lg'>
                  The test was comprised of Quantitative aptitude, English
                  Comprehension, Reasoning and General awareness. Total 100
                  questions were to be done in 60 mins. The whole test was
                  Coordinated by Pushkar Singla and the team of Aptitude Club.
                </p>
              </div>
              <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400'>
                <h3 className='text-xl font-semibold tracking-wide'>
                  16th - 25th January 2023
                </h3>
                {/* <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time> */}
                <p className='mt-3 text-lg'>
                  Aptitude Club of T&P cell of GJUS&T Hisar in partnership with
                  T.I.M.E. institute Hisar hosted the valedictory ceremony of
                  the 10- day Aptitude Training Program (ATP).
                </p>
                <p className='mt-3 text-lg'>
                  As chief guest, Prof. Avnesh Verma stated that such events
                  should be held on a regular basis for the benefit of students.
                  He went on to say that success is the consequence of our
                  continual efforts and that learners should study hard to
                  acquire aptitude abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
