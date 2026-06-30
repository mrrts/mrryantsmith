import { FaGithub, FaGlobe } from "react-icons/fa";
import Head from "next/head";
import Layout from "../components/Layout";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";
import styles from "../styles/pages/code-samples.module.css";
import cn from "classnames";

const CodeSamples = () => {
  useEntranceAnimation(".code-samples > *, .sample-list > *");

  return (
    <Layout>
      <Head>
        <title>Code Samples</title>
      </Head>

      <div className="code-samples">
        <h2>Code Samples</h2>

        <div className={styles.intro}>
          <p>
            My professional projects at Everspring and Pedago are proprietary, so I
            unfortunately cannot share the source code. Here are some recent
            code samples prepared for your perusal.
          </p>
        </div>

        <ul className={cn(styles.exampleList, "sample-list")}>
          <li>
            <h3 className={styles.itemHeading}>WorldThreads</h3>
            <p className={styles.itemDescription}>
              An independent project with a Rust back-end and React front-end,
              built with Claude. WorldThreads is an AI chat app where users may
              create fictional worlds and the characters that inhabit them, chat
              with characters one-on-one or in groups, generate illustrations
              and videos, generate novel chapters based on their conversations,
              and chat with a Backstage guide. It is intended to feel like an
              immersive, living storybook.
            </p>
            <p className={styles.itemDescription}>
              The project incorporates novel prompt engineering techniques
              emerging from original research&mdash;namely, a math-English
              hybrid notation that defines the chat completion boundaries (based
              on first principles, fictional world truth, character truth, and
              the present chat moment) using minimal tokens, which feels to me
              like a promising finding in prompt compression.
            </p>
            <p className={styles.itemDescription}>
              It follows a Bring Your Own OpenAI API Key (BYOK) model and is
              distributed as a Tauri desktop application.
            </p>

            <div className={styles.links}>
              <a
                href="https://github.com/mrrts/WorldThreads"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className={styles.buttonIcon} />
                View Source on GitHub
              </a>
              <a
                href="https://worldthreads.app"
                target="_blank"
                rel="noreferrer"
              >
                <FaGlobe className={styles.buttonIcon} />
                Marketing Site
              </a>
            </div>
          </li>

          <li>
            <h3 className={styles.itemHeading}>Survey Town</h3>
            <p className={styles.itemDescription}>
              A demo app wherein users may create, browse, and take surveys.
              Built with NestJS back-end, using a Controller-Service-Repository
              pattern, and Create-React-App front-end, the app features
              responsive Bootstrap design, user authentication, dynamic
              components based on survey-item types, accessibility standards,
              and high unit test coverage.
            </p>

            <div className={styles.links}>
              <a
                href="https://github.com/mrrts/survey-town"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className={styles.buttonIcon} />
                View Source on GitHub
              </a>
              <button disabled>
                <FaGlobe className={styles.buttonIcon} />
                View Live App (temporarily inactive)
              </button>
            </div>
          </li>

          <li>
            <h3 className={styles.itemHeading}>This Portfolio Site</h3>
            <p className={styles.itemDescription}>
              Built with NextJS back- and front-end for optimized static site
              generation. Integrated with Sanity CMS. Styled with TailwindCSS
              utility classes and featuring responsive design and accessibility
              standards.
            </p>

            <div className={styles.links}>
              <a
                href="https://github.com/mrrts/mrryantsmith"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className={styles.buttonIcon} />
                View Source on GitHub
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default CodeSamples;
