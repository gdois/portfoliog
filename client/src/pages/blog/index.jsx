import { useEffect, useState } from "react";
import Link from "next/link";
import ArrowLeft from "../../components/ArrowLeft";
import Head from "next/head";

const Blog = () => {
  const [data, setData] = useState([]);

  const showData = async () => {
    const response = await fetch("http://localhost:1337/api/blogs");
    const json = await response.json();
    setData(json.data);
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <ArrowLeft />
      <Head>
          <title>Posts</title>
        </Head>
      <div className='container mx-auto text-center'>
        <div>
          <h1 className='text-6xl mt-14 mb-14' style={{ color: "#ffac41" }}>
            Posts
          </h1>
        </div>
        <div className='grid md:grid-cols-3 md:gap-4 mb-14'>
          {data &&
            data.map((items) => (
              <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
                <h1 className='mt-4 text-2xl'>
                  <Link href={`/blog/${items.id}`} alt={`${items.attributes.title}`}>
                    {items.attributes.title}
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
