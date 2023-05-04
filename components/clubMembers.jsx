import Image from 'next/image';

export default function ClubMembers({
  clubheading,
  cordinator,
  jointCordinator,
  member1,
  member2,
  member3,
  member4,
}) {
  return (
    <section className='py-6 dark:bg-gray-800 dark:text-gray-100'>
      <div className='container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10'>
        <h1 className='text-4xl font-bold leading-none text-center sm:text-5xl text-indigo-800'>
          Our Team
        </h1>
        <p className='max-w-2xl text-center font font-semibold text-black'>
          {clubheading}
        </p>
        <div className='flex flex-row flex-wrap-reverse justify-center'>
          <div className='flex flex-col justify-center m-8 text-center'>
            <Image
              height={200}
              width={200}
              alt=''
              className='self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500'
              src={cordinator.image}
            />
            <p className='text-xl font-semibold leading-tight'>
              {cordinator.name}
            </p>
            <p className='dark:text-gray-400'>{cordinator.dept}</p>
            <p className='dark:text-gray-400'>Coordinator</p>
          </div>
          <div className='flex flex-col justify-center m-8 text-center'>
            <Image
              height={200}
              width={200}
              alt=''
              className='self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500'
              src={jointCordinator.image}
            />
            <p className='text-xl font-semibold leading-tight'>
              {jointCordinator.name}
            </p>
            <p className='dark:text-gray-400'>{jointCordinator.dept}</p>
            <p className='dark:text-gray-400'>Joint Coordinator</p>
          </div>
          <div className='flex flex-col justify-center m-8 text-center'>
            <Image
              height={200}
              width={200}
              alt=''
              className='self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500'
              src={member1.image}
            />
            <p className='text-xl font-semibold leading-tight'>
              {member1.name}
            </p>
            <p className='dark:text-gray-400'>{member1.dept}</p>
            <p className='dark:text-gray-400'>{member1.position}</p>
          </div>
          <div className='flex flex-col justify-center m-8 text-center'>
            <Image
              height={200}
              width={200}
              alt=''
              className='self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500'
              src={member2.image}
            />
            <p className='text-xl font-semibold leading-tight'>
              {member2.name}
            </p>
            <p className='dark:text-gray-400'>{member2.dept}</p>
            <p className='dark:text-gray-400'>{member2.position}</p>
          </div>
          <div className='flex flex-col justify-center m-8 text-center'>
            <Image
              height={200}
              width={200}
              alt=''
              className='self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500'
              src={member3.image}
            />
            <p className='text-xl font-semibold leading-tight'>
              {member3.name}
            </p>
            <p className='dark:text-gray-400'>{member3.dept}</p>
            <p className='dark:text-gray-400'>{member3.position}</p>
          </div>
          <div className='flex flex-col justify-center m-8 text-center'>
            <Image
              height={200}
              width={200}
              alt=''
              className='self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500'
              src={member4.image}
            />
            <p className='text-xl font-semibold leading-tight'>
              {member4.name}
            </p>
            <p className='dark:text-gray-400'>{member4.dept}</p>
            <p className='dark:text-gray-400'>{member4.position}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
