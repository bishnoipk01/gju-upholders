import Image from 'next/image';

export default function ClubWork({ poster1, poster2, poster3, poster4 }) {
  const posters = [poster1, poster2, poster3, poster4];

  return (
    <section className='py-10 bg-gray-900 text-gray-100'>
      <div className='container mx-auto px-6 space-y-10'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-teal-400'>Events</h2>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4'>
          {posters.map((poster, index) => (
            <article
              key={index}
              className='flex flex-col bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
            >
              <Image
                height={250}
                width={400}
                alt={poster.name || 'Event Poster'}
                className='object-cover w-full h-56'
                src={poster.image}
              />
              <div className='p-6'>
                <h3 className='text-lg font-semibold text-teal-400 mb-2'>
                  {poster.name}
                </h3>
                <p className='text-sm text-gray-300'>{poster.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
