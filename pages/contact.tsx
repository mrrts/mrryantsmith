import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Layout from "../components/Layout";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";
import styles from '../styles/pages/contact.module.css';

const Contact = () => {
  useEntranceAnimation('.contact > *');

  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      
      <div className='contact'>
        <h2>Contact</h2>

        <p className={styles.intro}>
          If you would like to get in touch, please visit my LinkedIn profile, or find my contact details on my resume.  
        </p>

        <div className={styles.resumeLink}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.icon} icon={faDownload} />
            Download Resume
          </a>
        </div>

        <div className={styles.linkedInLink}>
          <a
            href="https://linkedin.com/in/mrryantsmith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;