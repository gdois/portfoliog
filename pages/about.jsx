import Head from "next/head";
import ArrowLeft from "../components/ArrowLeft";

const Home = () => {
  return (
    <div className='container mx-auto text-center'>
      <Head>
        <title>Projetos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <ArrowLeft />
        <h1 className='text-6xl mt-14 mb-14' style={{ color: "#ffac41" }}>
          SOBRE MIM
        </h1>
      </div>
      <div className='p-5 rounded-lg bg-white shadow-lg w-full h-full'>
        <div>
          <h1 className='text-4xl bold pb-5'>Me</h1>
          <p className='text-1xl'>
            Me chamo Giovanni, tenho 18 anos e moro no interior de São Paulo,
            vulgo Tatuí (2 horas no máximo da capital), um jovem padawan em
            treinamento, buscando todo tipo de aventura e conhecimento. Trabalho
            profissionalmente há 2 anos e meio, atualmente trabalho na Agência
            Volve e, um projeto chamado Devopness, ambos sou desenvolvedor
            front-end, onde na agência eu uso todo tipo de coisa, vou de
            Wordpress, Hugo para React em segundos (famoso faz tudo)... Enquanto
            no Devopness eu trabalho somente com React, porém usando Redux,
            StoryBook, Context, Styled-Components e por aí vai. Estudo
            programação no ao todo 5 anos, sempre na brincadeira, fazendo mods e
            bots para joguinhos online e eu nunca pensei que iria virar
            profissão. Eu sou extremamente esforçado e isso é defeito, nisso eu
            acabo tendo problemas, saúde é uma delas (caso real), pode me
            colocar para trabalhar até com Fortran e vamo que vamo (tudo tem
            limites). Eu não tenho noção do que eu faço, eu tenho uma habilidade
            (ou defeito) de conseguir usar quase qualquer coisa e me meter em
            projetos bizarros e com coisas extremamente bizarras...
            <br />
            <b>
              Quer bater um papo ou até mandar proposta de emprego? Entre em
              contato comigo (meus sociais abaixo).
            </b>
          </p>
        </div>
      </div>
      <div className='p-5 rounded-lg bg-white shadow-lg w-full h-full mt-10 mb-20'>
        <h1 className='text-4xl mb-5'>Faça o Download do meu Curriculum</h1>
        <a href='cv.pdf' target='_blank' rel='noopener noreferrer'>
          <button
            className='pt-2 pl-10 pb-2 pr-10 text-2xl rounded'
            style={{ backgroundColor: "#ffac41" }}
            type='download'
          >
            Clica aqui
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
