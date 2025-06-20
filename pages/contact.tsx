import { FaLinkedin, FaDownload } from "react-icons/fa";
import Head from "next/head";
import Layout from "../components/Layout";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";
import styles from "../styles/pages/contact.module.css";

const Contact = () => {
  useEntranceAnimation(".contact > *");

  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>

      <div className="contact">
        <h2>Contact</h2>

        <p className={styles.intro}>
          If you would like to get in touch, please visit my LinkedIn profile,
          or find my contact details on my resume.
        </p>

        <div className={styles.resumeLink}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FaDownload className={styles.icon} />
            Download Resume
          </a>
        </div>

        <div className={styles.linkedInLink}>
          <a
            href="https://linkedin.com/in/mrryantsmith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
