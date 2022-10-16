import Link from "next/link";
import ArrowLeft from "../../components/ArrowLeft";
import Head from "next/head";
import { getPosts } from "../../services/api";

const Blog = (props) => {
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
          {props.posts &&
            props.posts.map((items) => (
              <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
                <h1 className='mt-4 text-2xl'>
                  <Link href={`/blog/${items.slug}`} alt={`${items.title}`}>
                    {items.title}
                  </Link>
                </h1>
              </section>
            ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
  }
}

export default Blog;
