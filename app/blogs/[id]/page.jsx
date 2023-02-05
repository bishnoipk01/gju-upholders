import Image from "next/image";

import blog from "@/test-data/json/blog.json";
export default function BlogDetailed() {
  return (
    <section className="container mx-auto bg-slate-50 p-10">
      <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-violet-800">
        {blog.title}
      </h1>
      <Image src={blog.image} height={500} width={800} alt="" />
      <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-grey-800">
        {blog.description}
      </p>
    </section>
  );
}
