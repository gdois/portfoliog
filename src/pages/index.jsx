import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className='container mx-auto flex h-screen'>
        <Head>
          <title>Gio.</title>
        </Head>

        <div className='m-auto'>
          <h1
            className='text-8xl uppercase text-center'
            style={{ color: "#ff1e56" }}
          >
            GIO.
          </h1>
          <hr className='hr' />
        </div>
      </div>
    </>
  );
};

export default Home;
