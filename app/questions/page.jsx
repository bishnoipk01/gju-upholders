import Link from "next/link";

export default function Questions() {
  return (
    <section className="container mx-auto flex justify-between">
      <h1 className="heading-2">All Questions</h1>
      <Link
        href={"/questions/new-question"}
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-30 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 "
      >
        Ask a Question
      </Link>
    </section>
  );
}
