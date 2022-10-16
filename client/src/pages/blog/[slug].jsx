import ArrowLeft from "../../components/ArrowLeft";
import { getSinglePost, getPosts } from "../../services/api";
import Head from "next/head";

const Blog = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <ArrowLeft to='/blog' />
      <div className='container mx-auto pt-10'>
        <div>
          {props.post && (
            <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
              <h1 className='mt-4 text-2xl text-center'>{props.post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post }
  }
}

export default Blog;
