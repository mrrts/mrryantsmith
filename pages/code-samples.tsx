import Head from "next/head";
import Layout from "../components/Layout";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";

const CodeSamples = () => {
  useEntranceAnimation('.code-samples > *');

  return (
    <Layout>
      <Head>
        <title>Code Samples</title>
      </Head>
      <div className='code-samples'>
        <h2>Code Samples</h2>
        <h2>Code Samples</h2>
        <h2>Code Samples</h2>
      </div>
    </Layout>
  );
}

export default CodeSamples;