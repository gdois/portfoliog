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
          <ul className="text-center">
            <li style={{ color: "#ffac41" }} className="'underline text-2xl text-center pr-4 uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
