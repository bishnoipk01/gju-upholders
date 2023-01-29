import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto border-2 border-red-300">
      <h1 className="text-center underline text-3xl">
        Welcome to Gju-Upholders
      </h1>
      <Link href={"/blogs"}>Blogs</Link>
    </main>
  );
}
