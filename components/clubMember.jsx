import Image from 'next/image';

export default function ClubMembers() {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
			<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 2, 2020</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
    // <section class='bg-white dark:bg-gray-900'>
    //   <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
    //     <div class='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
    //       <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
    //         Core Club Members
    //       </h2>
    //       {/* <p class='font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
    //         Explore the whole collection of open-source web components and
    //         elements built with the utility classes from Tailwind
    //       </p> */}
    //     </div>
    //     <div class='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
    //       <div class='items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700'>
    //         <a href='#'>
    //           <Image
    //             class='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'
    //             width={200}
    //             height={200}
    //             src={'/1.jpg'}
    //             alt=' Avatar'
    //           />
    //         </a>
    //         <div class='p-5'>
    //           <h3 class='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
    //             <a href='#'>Member 1</a>
    //           </h3>
    //           <span class='text-gray-500 dark:text-gray-400'>Cordinator</span>
    //           <p class='mt-3 mb-4 font-light text-gray-500 dark:text-gray-400'>
    //             Bonnie drives the technical strategy of the flowbite platform
    //             and brand.
    //           </p>
    //         </div>
    //       </div>
    //       <div class='items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700'>
    //         <a href='#'>
    //           <Image
    //             class='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'
    //             width={200}
    //             height={200}
    //             src={'/1.jpg'}
    //             alt=' Avatar'
    //           />
    //         </a>
    //         <div class='p-5'>
    //           <h3 class='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
    //             <a href='#'>Member 2</a>
    //           </h3>
    //           <span class='text-gray-500 dark:text-gray-400'>
    //             Co-cordinator
    //           </span>
    //           <p class='mt-3 mb-4 font-light text-gray-500 dark:text-gray-400'>
    //             Jese drives the technical strategy of the flowbite platform and
    //             brand.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
