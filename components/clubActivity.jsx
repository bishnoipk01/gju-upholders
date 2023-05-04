export default function ClubActivity({ clubname, activities }) {
  return (
    <section className='dark:bg-gray-800 dark:text-gray-100'>
      <div className='container max-w-5xl px-4 py-12 mx-auto'>
        <div className='grid gap-4 mx-4 md:grid-cols-12'>
          <div className='col-span-12 sm:col-span-3'>
            <div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400'>
              <h3 className='text-3xl font-semibold'>
                {clubname} CLUB ACTIVITES
              </h3>
            </div>
          </div>
          <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
            <div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700'>
              {activities.map((activity, index) => {
                return (
                  <div
                    key={index}
                    className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400'
                  >
                    <h3 className='text-xl font-semibold tracking-wide'>
                      {activity.date}
                    </h3>
                    <p className='mt-3 text-lg'>{activity.description}</p>
                    <p className='mt-3 text-lg'>{activity.description2}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
