import Image from 'next/image';

export default function ClubComments() {
  return (
    <section class='bg-white dark:bg-gray-900 py-8 lg:py-16'>
      <div class='max-w-2xl mx-auto px-4'>
        <div class='flex justify-between items-center mb-6'>
          <h2 class='text-lg lg:text-2xl font-bold text-gray-900 dark:text-white'>
            Discussion
          </h2>
        </div>
        <form class='mb-6'>
          <div class='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
            <label for='comment' class='sr-only'>
              Your comment
            </label>
            <textarea
              id='comment'
              rows='6'
              class='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
              placeholder='Write a comment...'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            class='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800'
          >
            Post comment
          </button>
        </form>
        <article class='p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900'>
          <footer class='flex justify-between items-center mb-2'>
            <div class='flex items-center'>
              <p class='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                <Image
                  height={100}
                  width={100}
                  class='mr-2 w-6 h-6 rounded-full'
                  src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
                  alt='User 1'
                />
                User 1
              </p>
              <p class='text-sm text-gray-600 dark:text-gray-400'>
                <time pubdate datetime='2023-04-24' title='April 24, 2023'>
                  Apr. 24, 2023
                </time>
              </p>
            </div>
          </footer>
          <p class='text-gray-500 dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            optio magni nesciunt, impedit aliquam officiis perferendis porro
            laboriosam debitis iusto!
          </p>
          <div class='flex items-center mt-4 space-x-4'>
            <button
              type='button'
              class='flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400'
            >
              <svg
                aria-hidden='true'
                class='mr-1 w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                ></path>
              </svg>
              Reply
            </button>
          </div>
        </article>

        <article class='p-6 text-base bg-white  border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
          <footer class='flex justify-between items-center mb-2'>
            <div class='flex items-center'>
              <p class='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                <Image
                  height={100}
                  width={100}
                  class='mr-2 w-6 h-6 rounded-full'
                  src='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
                  alt='user 2'
                />
                user 2
              </p>
              <p class='text-sm text-gray-600 dark:text-gray-400'>
                <time pubdate datetime='2023-04-23' title='April 23rd, 2023'>
                  Apr. 23, 2023
                </time>
              </p>
            </div>
          </footer>
          <p class='text-gray-500 dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            accusamus corporis nostrum distinctio rem quaerat!
          </p>
          <div class='flex items-center mt-4 space-x-4'>
            <button
              type='button'
              class='flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400'
            >
              <svg
                aria-hidden='true'
                class='mr-1 w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                ></path>
              </svg>
              Reply
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
