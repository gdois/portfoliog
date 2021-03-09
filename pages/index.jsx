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
          <div className='flex pt-2'>
            <span
              className='underline text-2xl text-center pr-4 uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
              style={{ color: "#ffac41" }}
            >
              <Link href='/projects'>Projetos</Link>
            </span>
            <span
              className='underline text-2xl text-center pr-4 uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
              style={{ color: "#ffac41" }}
            >
              <Link href='/about'>Sobre mim</Link>
            </span>
            <span
              className='underline text-2xl text-center uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
              style={{ color: "#ffac41" }}
            >
              <Link href='/soon'>Blog</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
