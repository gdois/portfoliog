import Head from "next/head";
import Link from "next/link";
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
          PROJETOS
        </h1>
      </div>
      <div className='grid md:grid-cols-3 md:gap-4'>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://cafemonik.com.br'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='cafe.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://cafemonik.com.br' target='_blank'>
              Café Monik
            </a>
          </h1>
          <span>GatsbyJS</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://example.com.br'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='port.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://example.com.br' target='_blank'>
              Portfolio
            </a>
          </h1>
          <span>Next.js</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://tassengenharia.com.br/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='tass.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://tassengenharia.com.br/' target='_blank'>
              Tass Engenharia
            </a>
          </h1>
          <span>Wordpress</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://healthworlddata.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='hwd.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://healthworlddata.com/' target='_blank'>
              Health World Data
            </a>
          </h1>
          <span>Next.js</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://healthworlddata.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='HWD2.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://healthworlddata.netlify.app/' target='_blank'>
              Health World Data
            </a>
          </h1>
          <span>Ionic PWA/React</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://refactorshop.com.br/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='refactorshop.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://refactorshop.com.br/' target='_blank'>
              Refactor Shop
            </a>
          </h1>
          <span>Wordpress/Woocommerce</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://refactor.com.br/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='refactor.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://refactor.com.br/' target='_blank'>
              Refactor
            </a>
          </h1>
          <span>Wordpress</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://grupoadega33.com.br/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='adega33.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://grupoadega33.com.br/' target='_blank'>
              Grupo Adega33
            </a>
          </h1>
          <span>Wordpress</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://thebookfinder.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='bookfinder.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://thebookfinder.netlify.app/' target='_blank'>
              Book finder
            </a>
          </h1>
          <span>VanillaJS</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://findegithub.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='githubfind.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://findegithub.netlify.app/' target='_blank'>
              Github Finder
            </a>
          </h1>
          <span>React</span>
        </section>
        <section
          className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'
          rel='noopener noreferrer'
        >
          <a href='https://shumtz.github.io/weatherApp/' target='_blank'>
            <img className='w-full rounded' src='weatherapp.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a href='https://shumtz.github.io/weatherApp/' target='_blank'>
              Weather App
            </a>
          </h1>
          <span>VanillaJS</span>
        </section>
        <section
          className='p-5 mb-14 md:mb-0 rounded-lg bg-white shadow-lg'
          rel='noopener noreferrer'
        >
          <a
            href='https://marketplace.visualstudio.com/items?itemName=gioexited.karla-coding-theme'
            target='_blank'
          >
            <img className='w-full rounded' src='theme.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://marketplace.visualstudio.com/items?itemName=gioexited.karla-coding-theme'
              target='_blank'
            >
              Karla Theme
            </a>
          </h1>
          <span>Visual Studio Code</span>
        </section>
      </div>
    </div>
  );
};

export default Home;
