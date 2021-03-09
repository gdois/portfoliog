import Head from "next/head";
import Link from "next/link";
import ArrowLeft from "../components/ArrowLeft";

const Soon = () => {
  return (
    <div className='container mx-auto text-center flex h-screen'>
      <Head>
        <title>Blog</title>
      </Head>

      <ArrowLeft />

      <div className='m-auto'>
        <h1 className='text-6xl mt-14 mb-14' style={{ color: "#ffac41" }}>
          Em breve...
        </h1>
        <Link href='/'>
          <button className='bg-white pt-4 pl-10 pb-4 pr-10 text-2xl rounded'>
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Soon;
