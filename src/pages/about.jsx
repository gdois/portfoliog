import Head from "next/head";
import ArrowLeft from "../components/ArrowLeft";

const About = () => {
  return (
    <>
      <ArrowLeft />
      <div className='container mx-auto text-center'>
        <Head>
          <title>Sobre mim</title>
        </Head>
        <div>
          <h1 className='text-6xl mt-14 mb-14' style={{ color: "#ffac41" }}>
            SOBRE MIM
          </h1>
        </div>
        <div className='p-5 rounded-lg bg-white shadow-lg w-full h-full'>
          <div>
            <h1 className='text-4xl bold pb-5'>Me</h1>
            <p className='text-1xl'>
               Olá, pode me chamar de Giovanni Soares ou se preferir, Gio!
               Atualmente residente de Colatina/ES mas naturalizado de São Paulo.
               Sou front-end developer faz 4 anos, trabalhando com React, Next, Vue e Nuxt...
               Atualmente estou mais focado em vagas e desenvolvimento com Vue.js, onde está concentrado
               a maior parte dos meus estudos atualmente.
              <br />
              <b>
               Quer me conhecer melhor e trocar uma ideia? Me chame pelas redes sociais abaixo :).
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
