import Head from "next/head";
import Layout from "../components/Layout";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";

const Contact = () => {
  useEntranceAnimation('.contact > *');
  
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      
      <div className='contact'>
        <h2>Contact</h2>
      </div>
    </Layout>
  );
}

export default Contact;