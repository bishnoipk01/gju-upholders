export default function ClubHeader({ clubName }) {
  return (
    <div className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white p-20'>
      <h1 className='text-8xl font-bold text-center'>{clubName}</h1>
    </div>
  );
}
