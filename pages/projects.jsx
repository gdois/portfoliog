import Head from "next/head";
import Link from "next/link";
import ArrowLeft from "../components/ArrowLeft";

const Projects = () => {
  return (
    <div className='container mx-auto text-center'>
      <Head>
        <title>Projetos</title>
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
            alt="Cafe Monik"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='cafe.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://cafemonik.com.br'
              alt="Cafe Monik"
              target='_blank'
              rel='noopener noreferrer'
            >
              Café Monik
            </a>
          </h1>
          <span>GatsbyJS</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://example.com.br'
            alt="Portfolio"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='port.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://example.com.br'
              alt="Portfolio"
              target='_blank'
              rel='noopener noreferrer'
            >
              Portfolio
            </a>
          </h1>
          <span>Next.js</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://tassengenharia.com.br/'
            alt="Tass Engenharia"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='tass.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://tassengenharia.com.br/'
              alt="Tass Engenharia"
              target='_blank'
              rel='noopener noreferrer'
            >
              Tass Engenharia
            </a>
          </h1>
          <span>Wordpress</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://healthworlddata.com/'
            alt="Health World Data"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='hwd.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://healthworlddata.com/'
              alt="Health World Data"
              target='_blank'
              rel='noopener noreferrer'
            >
              Health World Data
            </a>
          </h1>
          <span>Next.js</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://healthworlddata.netlify.app/'
            alt="Health World Data"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='HWD2.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://healthworlddata.netlify.app/'
              alt="Health World Data"
              target='_blank'
              rel='noopener noreferrer'
            >
              Health World Data
            </a>
          </h1>
          <span>Ionic PWA/React</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://refactorshop.com.br/'
            alt="Refactor Shop"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='refactorshop.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://refactorshop.com.br/'
              alt="Refactor Shop"
              target='_blank'
              rel='noopener noreferrer'
            >
              Refactor Shop
            </a>
          </h1>
          <span>Wordpress/Woocommerce</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://refactor.com.br/'
            alt="Refactor"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='refactor.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://refactor.com.br/'
              alt="Refactor"
              target='_blank'
              rel='noopener noreferrer'
            >
              Refactor
            </a>
          </h1>
          <span>Wordpress</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://grupoadega33.com.br/'
            alt="Grupo Adega 33"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='adega33.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://grupoadega33.com.br/'
              alt="Grupo Adega 33"
              target='_blank'
              rel='noopener noreferrer'
            >
              Grupo Adega33
            </a>
          </h1>
          <span>Wordpress</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://thebookfinder.netlify.app/'
            alt="Book Finder"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='bookfinder.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://thebookfinder.netlify.app/'
              alt="Book Finder"
              target='_blank'
              rel='noopener noreferrer'
            >
              Book finder
            </a>
          </h1>
          <span>VanillaJS</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://findegithub.netlify.app/'
            alt="Githu Find"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='githubfind.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://findegithub.netlify.app/'
              alt="Github Find"
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Finder
            </a>
          </h1>
          <span>React</span>
        </section>
        <section className='p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://shumtz.github.io/weatherApp/'
            alt="Weather App"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='weatherapp.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://shumtz.github.io/weatherApp/'
              alt="Weather App"
              target='_blank'
              rel='noopener noreferrer'
            >
              Weather App
            </a>
          </h1>
          <span>VanillaJS</span>
        </section>
        <section className='p-5 mb-14 md:mb-0 rounded-lg bg-white shadow-lg'>
          <a
            href='https://marketplace.visualstudio.com/items?itemName=gioexited.karla-coding-theme'
            target='_blank'
            alt="Theme Karla"
            rel='noopener noreferrer'
          >
            <img className='w-full rounded' src='theme.webp' />
          </a>
          <h1 className='mt-4 text-2xl'>
            <a
              href='https://marketplace.visualstudio.com/items?itemName=gioexited.karla-coding-theme'
              target='_blank'
              alt="Theme Karla"
              rel='noopener noreferrer'
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

export default Projects;
