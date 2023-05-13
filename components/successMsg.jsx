export default function Success({ message }) {
  return (
    <div
      className='bg-green-100 rounded-md p-3 flex w-11/12 mb-10 z-10 absolute top-2 left-auto md:w-1/2 2xl:w-1/4'
      id='success'
    >
      <svg
        className='stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0'
        viewBox='0 0 24 24'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <circle cx='12' cy='12' r='9' />
        <path d='M9 12l2 2 4-4' />
      </svg>

      <div className='text-green-700'>
        <div className='font-bold text-xl'>{message}</div>
      </div>
      <span
        className='absolute top-0 bottom-0 right-0 px-4 py-3'
        onClick={() => {
          document.getElementById('success').style.display = 'none';
        }}
      >
        <svg
          className='fill-current h-6 w-6 text-green-700'
          role='button'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <title>Close</title>
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
        </svg>
      </span>
    </div>
  );
}
