export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Spinner */}
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-400 border-solid h-16 w-16"></div>

      {/* Loading Text */}
      <p className="mt-4 text-lg font-semibold text-blue-400">
        Loading, please wait...
      </p>
    </div>
  );
}
