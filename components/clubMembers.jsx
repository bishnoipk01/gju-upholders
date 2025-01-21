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
    <section className='py-12 bg-gray-900'>
      <div className='container mx-auto px-6 space-y-12'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center text-teal-400'>
          Our Team
        </h1>
        {clubheading && (
          <p className='max-w-2xl mx-auto text-center text-base sm:text-lg font-medium text-gray-300'>
            {clubheading}
          </p>
        )}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
          {[
            { ...cordinator, role: 'Coordinator' },
            { ...jointCordinator, role: 'Joint Coordinator' },
            { ...member1 },
            { ...member2 },
            { ...member3 },
            { ...member4 },
          ].map((member, index) => (
            <div
              key={index}
              className='flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow'
            >
              <Image
                height={200}
                width={200}
                alt={member.name || 'Member'}
                className='w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover shadow'
                src={member.image}
              />
              <p className='text-base sm:text-lg font-semibold text-teal-400'>
                {member.name}
              </p>
              <p className='text-sm font-medium text-gray-400'>{member.dept}</p>
              {member.position && (
                <p className='text-sm font-medium text-teal-500'>
                  {member.position}
                </p>
              )}
              {member.role && (
                <p className='text-sm text-gray-500'>{member.role}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
