import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout';
import { useEntranceAnimation } from '../lib/hooks/useEntranceAnimation.hook';

const Home: NextPage = () => {
  useEntranceAnimation('.home > *');
  
  return (
    <Layout>
      <Head>
        <title>Ryan Smith, Full-Stack Software Developer</title>
        <meta name="description" content="A portfolio site for Ryan Smith, full-stack software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home'>
        <h2>Hello World</h2>
      </div>
    </Layout>

  )
}

export default Home
