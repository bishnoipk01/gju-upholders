export default function ClubHeader({ clubName }) {
  return (
    <div className="bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-700 text-white py-16 mt-0">
      <h1 className="text-6xl md:text-8xl font-extrabold text-center tracking-tight drop-shadow-lg">
        {clubName}
      </h1>
    </div>
  );
}
