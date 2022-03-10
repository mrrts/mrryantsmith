import Head from "next/head";
import Layout from "../components/Layout";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";

const Projects = () => {
  useEntranceAnimation('.projects > *');
  
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      
      <div className='projects'>
        <h2>Projects</h2>
      </div>
    </Layout>
  );
}

export default Projects;