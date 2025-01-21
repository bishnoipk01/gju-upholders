export default function ClubActivity({ clubname, activities }) {
  return (
    <section className='py-12 bg-gray-900'>
      <div className='container max-w-5xl px-6 mx-auto'>
        <div className='grid gap-8 md:grid-cols-12'>
          <div className='col-span-12 md:col-span-3'>
            <div className='text-center md:text-left mb-8 md:mb-14'>
              <div className='before:block before:w-20 before:h-2 before:mb-4 before:rounded-md before:mx-auto md:before:mx-0 before:bg-teal-400'></div>
              <h3 className='text-2xl sm:text-3xl font-bold text-teal-400'>
                {clubname} Club Activities
              </h3>
            </div>
          </div>
          <div className='relative col-span-12 md:col-span-9'>
            <div className='space-y-8 relative md:before:absolute md:before:top-2 md:before:bottom-0 md:before:w-0.5 md:before:-left-3 before:bg-gray-700'>
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className='flex flex-col relative md:before:absolute md:before:top-2 md:before:w-4 md:before:h-4 md:before:rounded-full md:before:left-[-35px] md:before:z-10 before:bg-teal-400'
                >
                  <h3 className='text-lg sm:text-xl font-semibold text-teal-400'>
                    {activity.date}
                  </h3>
                  <p className='mt-2 text-base sm:text-lg text-gray-300'>
                    {activity.description}
                  </p>
                  {activity.description2 && (
                    <p className='mt-1 text-base sm:text-lg text-gray-400'>
                      {activity.description2}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
