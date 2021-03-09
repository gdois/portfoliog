import Router from "next/router";
import NProgress from "nprogress";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "nprogress/nprogress.css";
import {
  FiGithub,
  FiLinkedin,
  FiMessageSquare,
  FiGitlab,
  FiMail,
} from "react-icons/fi";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <>
      <html lang='pt-br'>
        <Head>
          <meta property='og:title' content='Home' key='Home' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name='Description' content='Portfolio Gio' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </html>
      <div className='flex fixed bottom-0 left-2/4 transform -translate-x-2/4'>
        <a
          href='https://github.com/shumtz'
          target='_blank'
          rel='noopener'
          alt='github'
        >
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FiGithub className='text-4xl' style={{ color: "#ff1e56" }} />
            <span style={{ display: "none" }}>Github</span>
          </div>
        </a>
        <a
          href='https://wa.link/nmcs4z'
          target='_blank'
          rel='noopener'
          alt='whatsapp'
        >
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FiMessageSquare
              className='text-4xl rounded bg-white'
              style={{ color: "#ff1e56" }}
            />
            <span style={{ display: "none" }}>Whatsapp</span>
          </div>
        </a>
        <a href='mailto:giovanni_soares@aol.com' alt='email'>
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FiMail
              className='text-4xl rounded bg-white'
              style={{ color: "#ff1e56" }}
            />
            <span style={{ display: "none" }}>E-mail</span>
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/giovanni-soares-9a0203176/'
          target='_blank'
          rel='noopener'
          alt='linkedin'
        >
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FiLinkedin
              className='text-4xl rounded bg-white'
              style={{ color: "#ff1e56" }}
            />
            <span style={{ display: "none" }}>Linkedin</span>
          </div>
        </a>
        <a
          href='https://gitlab.com/gio_exited'
          target='_blank'
          rel='noopener'
          alt='gitlab'
        >
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FiGitlab
              className='text-4xl rounded bg-white'
              style={{ color: "#ff1e56" }}
            />
            <span style={{ display: "none" }}>Gitlab</span>
          </div>
        </a>
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
