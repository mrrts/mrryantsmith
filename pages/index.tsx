import { faDownload, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout';
import { useEntranceAnimation } from '../lib/hooks/useEntranceAnimation.hook';
import styles from '../styles/pages/index.module.css';

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
        <h2 className={styles.homeHeading}>
          Hello, I'm Ryan.
          <FontAwesomeIcon className={styles.headingIcon} icon={faHandshake} />
        </h2>
        <div className={`${styles.introduction} introduction`}>
          <p>
            I am a curious and hard-working puzzle-solver with a background in theatre and music performance,
            seeking my next role as a mid-level, full-stack developer.
          </p>
          <p>
            As a JavaScript enthusiast, I am especially fond of working in stacks that include NodeJS and React,
            although I adapt quickly to other tech stacks.
          </p>
          <p>
            I started as a self-taught volunteer (sometimes hired) developer, and then attended the fantastic program at Dev Bootcamp.
            I spent 5 rich and enjoyable years in the academic technology space at Everspring and would especially
            love to stay in that field as a growing specialist.
          </p>
        </div>

        <div className={`${styles.techStack} tech-stack`} >
          <h3>Professional Technical Experience</h3>
          <ul>
            <li>Front-End: HTML, CSS, SASS, JavaScript, Typescript, React (CRA, NextJS, Redux), Angular (Rxjs, Redux), JQuery</li>
            <li>Back-End: Java (Spring), Scala (Play), NodeJS (Meteor, NestJS, Express), PHP, Ruby (Rails)</li>
            <li>REST Apis, GraphQL, JSON, headless CMS, Drupal</li>
            <li>AWS (S3, EC2), Git, Docker</li>
            <li>Agile Methodology (Scrum)</li>
          </ul>
        </div>
        <div className={styles.resumeLink}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.downloadIcon} icon={faDownload} />
            Download Resume
          </a>
        </div>
      </div>
    </Layout>

  )
}

export default Home
