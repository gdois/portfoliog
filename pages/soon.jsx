import Head from "next/head";
import ArrowLeft from "../components/ArrowLeft";

const Soon = () => {
  return (
    <>
      <ArrowLeft />
      <div className='container mx-auto text-center flex h-screen'>
        <Head>
          <title>Blog</title>
        </Head>

        <div className='m-auto'>
          <h1 className='text-6xl mt-14 mb-14' style={{ color: "#ffac41" }}>
            Em breve...
          </h1>
        </div>
      </div>
    </>
  );
};

export default Soon;
