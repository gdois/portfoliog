import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Markdown from 'react-markdown';
import ArrowLeft from "../../components/ArrowLeft";

const Blog = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  const showData = async () => {
    const response = await fetch(
      `http://localhost:1337/blogs/${router.query.id}`
    );
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    showData();
  });

  return (
    <>
      <ArrowLeft to='/blog' />
      <div className='container mx-auto pt-10'>
        <div>
          {data && (
            <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
              {/* <img
                className='w-full rounded'
                src={`http://localhost:1337${data.Cover.url}`}
              /> */}
              <h1 className='mt-4 text-2xl text-center'>{data.Title}</h1>
              <Markdown className='whitespace-pre-wrap p-10'>{data.Text}</Markdown>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
