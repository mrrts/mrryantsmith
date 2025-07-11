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
            My professional projects at Everspring are proprietary, so I
            unfortunately cannot share the source code. Here are some recent
            code samples prepared for your perusal.
          </p>
        </div>

        <ul className={cn(styles.exampleList, "sample-list")}>
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
