import bg from "../public/14.jpeg";
export default function Header() {
  return (
    <header
      className="w-full bg-cover bg-center mb-10"
      style={{
        height: "70vh",
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
            Welcome to{" "}
            <span className="underline text-blue-400">Gju-Upholders</span>
          </h1>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Explore!
          </button>
        </div>
      </div>
    </header>
  );
}
