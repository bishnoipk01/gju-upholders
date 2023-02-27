import bg from "../public/14.jpeg";
import Card from "./card";

export default function HomeBlog() {
  //TEST
  const blogId = "randomBlogId";
  return (
    <>
      <h1 className="text-4xl font-normal leading-normal mt-10 text-blue-800 text-center">
        Latest From Blogs
      </h1>
      <section className="flex p-20 justify-between container mx-auto">
        <Card
          src={bg.src}
          title="title"
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi quam ipsa commodi esse vitae dolorum, beatae soluta amet ea."
          }
          btn="read more"
          navigate={`/blogs/${blogId}`}
        />
        <Card
          src={bg.src}
          title="title"
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi quam ipsa commodi esse vitae dolorum, beatae soluta amet ea."
          }
          btn="read more"
          navigate={`/blogs/${blogId}`}
        />
        <Card
          src={bg.src}
          title="title"
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi quam ipsa commodi esse vitae dolorum, beatae soluta amet ea."
          }
          btn="read more"
          navigate={`/blogs/${blogId}`}
        />
      </section>
    </>
  );
}
