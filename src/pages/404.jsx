import Head from "next/head";
import ArrowLeft from "../components/ArrowLeft";

const err404 = () => {
  return (
    <>
      <ArrowLeft />
      <div
        className='container mx-auto flex h-screen text-center'
        style={{ color: "#ff1e56" }}
      >
        <Head>
          <title>Página não encontrada</title>
        </Head>
        <div className='m-auto'>
          <h1 className='text-7xl p-5 text-bold'>404</h1>
          <h2 className='text-4xl pb-5'>Não Encontrado</h2>
          <hr className='hr' />
          <iframe
            src='https://giphy.com/embed/6uGhT1O4sxpi8'
            width='480'
            height='240'
            frameBorder='0'
            class='giphy-embed'
            allowFullScreen
          ></iframe>
          <p>
            <a href='https://giphy.com/gifs/awkward-pulp-fiction-john-travolta-6uGhT1O4sxpi8'></a>
          </p>
        </div>
      </div>
    </>
  );
};

export default err404;
