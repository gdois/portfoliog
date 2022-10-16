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
import { FaWhatsapp, FaTelegramPlane, FaEnvelope, FaGithub, FaGitlab, FaLinkedin, FaGit } from "react-icons/fa";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <>
      <html lang='pt-br'>
        <Head>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
          <meta property='og:title' content='Home' key='Home' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta name='Description' content='Portfolio Gio' />
          <meta name="robots" content="index, follow" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
      </html>
      <div className='flex fixed bottom-0 left-2/4 transform -translate-x-2/4 z-50'>
        <a
          href='https://github.com/shumtz'
          target='_blank'
          rel='noopener'
          alt='github'
          aria-label="Github"
        >
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FaGithub className='text-4xl' style={{ color: "#ff1e56" }} />
          </div>
          <span style={{ display: "none" }}>Github</span>
        </a>
        <a
          href='https://gitlab.com/gio_exited'
          target='_blank'
          rel='noopener'
          alt='gitlab'
          aria-label="Gitlab"
        >
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FaGitlab
              className='text-4xl rounded bg-white'
              style={{ color: "#ff1e56" }}
            />
          </div>
          <span style={{ display: "none" }}>Gitlab</span>
        </a>
        <a href='mailto:giovanni_soares@aol.com' alt='email' aria-label="E-mail">
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FaEnvelope
              className='text-4xl rounded bg-white'
              style={{ color: "#ff1e56" }}
            />
          </div>
          <span style={{ display: "none" }}>E-mail</span>
        </a>
        <a
          href='https://www.linkedin.com/in/giovanni-soares-9a0203176/'
          target='_blank'
          rel='noopener'
          alt='linkedin'
          aria-label="Linkedin"
        >
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FaLinkedin
              className='text-4xl rounded bg-white'
              style={{ color: "#ff1e56" }}
            />
          </div>
          <span style={{ display: "none" }}>Linkedin</span>
        </a>
        <a
          href='https://t.me/gio_exited'
          target='_blank'
          rel='noopener'
          alt='telegram'
          aria-label="telegram"
        >
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FaTelegramPlane
              className='text-4xl rounded bg-white'
              style={{ color: "#ff1e56" }}
            />
          </div>
          <span style={{ display: "none" }}>Telegram</span>
        </a>
        <a
          href='https://wa.link/nmcs4z'
          target='_blank'
          rel='noopener'
          alt='whatsapp'
          aria-label="Whatsapp"
        >
          <div className='rounded bg-white p-2 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <FaWhatsapp
              className='text-4xl rounded bg-white'
              style={{ color: "#ff1e56" }}
            />
          </div>
          <span style={{ display: "none" }}>Whatsapp</span>
        </a>
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
