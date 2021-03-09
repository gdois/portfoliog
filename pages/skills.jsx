import ArrowLeft from "../components/ArrowLeft";
import Progress from "../components/Progress";
import Head from "next/head";

const skills = () => {
  return (
    <>
      <ArrowLeft />
      <div className='container mx-auto'>
        <Head>
          <title>Skills</title>
        </Head>
        <div>
          <h1
            className='text-6xl mt-14 mb-14 text-center'
            style={{ color: "#ffac41" }}
          >
            SKILLS
          </h1>
        </div>
        <div className='flex'>
          <div className='w-full mb-14'>
            <section className='grid grid-cols-3 w-full p-5 mb-5 md:mb-0 rounded-lg bg-white shadow-lg justify-center'>
              <Progress value='5 Anos' color='#ffac41' text='HTML/CSS' />
              <Progress value='1 Ano' color='#ffac41' text='Sass' />
              <Progress value='85' color='#ffac41' text='Javascript' />
              <Progress value='60' color='#ffac41' text='Typescript' />
              <Progress value='45' color='#ffac41' text='C/C++' />
              <Progress value='20' color='#ffac41' text='Python' />
              <Progress value='10' color='#ffac41' text='GoLang' />
              <Progress value='60' color='#ffac41' text='React' />
              <Progress value='20' color='#ffac41' text='Redux' />
              <Progress value='45' color='#ffac41' text='Gatsby' />
              <Progress value='45' color='#ffac41' text='Next.js' />
              <Progress value='30' color='#ffac41' text='Vue.js' />
              <Progress value='50' color='#ffac41' text='PHP' />
              <Progress value='40' color='#ffac41' text='Wordpress' />
              <Progress value='78' color='#ffac41' text='Unix' />
              <Progress value='78' color='#ffac41' text='Windows' />
              <Progress value='60' color='#ffac41' text='Git' />
              <Progress value='50' color='#ffac41' text='UI/UX' />
              <Progress value='60' color='#ffac41' text='Figma' />
              <Progress value='40' color='#ffac41' text='Gimp' />
              <Progress value='50' color='#ffac41' text='Photoshop' />
              <Progress value='30' color='#ffac41' text='Google Cloud' />
              <Progress value='10' color='#ffac41' text='AWS' />
              <Progress value='40' color='#ffac41' text='OVH' />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default skills;
