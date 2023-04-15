import Image from 'next/image';

export default function CoreMembers() {
  return (
    <section class='bg-white dark:bg-gray-900'>
      <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <div class='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Core Members
          </h2>
          <p class='font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          </p>
        </div>
        <div class='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
          <div class='items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <Image
                width={300}
                height={300}
                class='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'
                src={'/1.jpg'}
                alt='Bonnie Avatar'
              />
            </a>
            <div class='p-5'>
              <h3 class='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                <a href='#'>Name</a>
              </h3>
              <span class='text-gray-500 dark:text-gray-400'>Cordinator</span>
              <p class='mt-3 mb-4 font-light text-gray-500 dark:text-gray-400'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique, nobis omnis? Doloribus veritatis ipsa adipisci!
              </p>
            </div>
          </div>
          <div class='items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <Image
                width={300}
                height={300}
                class='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'
                src={'/1.jpg'}
                alt='Sofia Avatar'
              />
            </a>
            <div class='p-5'>
              <h3 class='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                <a href='#'>Name</a>
              </h3>
              <span class='text-gray-500 dark:text-gray-400'>
                co-cordinator
              </span>
              <p class='mt-3 mb-4 font-light text-gray-500 dark:text-gray-400'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                voluptatum eos provident velit, commodi id?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
