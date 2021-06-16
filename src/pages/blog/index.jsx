import { useEffect, useState } from "react";
import Link from "next/link";
import ArrowLeft from "../../components/ArrowLeft";

const Blog = () => {
  const [data, setData] = useState([]);

  const showData = async () => {
    const response = await fetch("http://localhost:1337/blogs");
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    showData();
  });

  return (
    <>
      <ArrowLeft />
      <div className='container mx-auto text-center'>
        <div>
          <h1 className='text-6xl mt-14 mb-14' style={{ color: "#ffac41" }}>
            PUBLICAÇÕES
          </h1>
        </div>
        <div className='grid md:grid-cols-3 md:gap-4 mb-14'>
          {data &&
            data.map((items) => (
              <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
                <a href={`/blog/${items.id}`} alt={`${items.Title}`}>
                  <img
                    className='w-full rounded'
                    src={`http://localhost:1337${items?.Cover.url}`}
                  />
                </a>
                <h1 className='mt-4 text-2xl'>
                  <Link href={`/blog/${items.id}`} alt={`${items.Title}`}>
                    {items.Title}
                  </Link>
                </h1>
              </section>
            ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
