import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { FC, useEffect } from "react";
import Layout from "../components/Layout";
import { fetchProjects } from "../lib/projects.api";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";
import { Project as ProjectModel } from "../lib/models/Project";
import { Project } from "../components/Project";

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const projects = await fetchProjects();
  return {
    props: {
      projects
    }
  };
};

interface Props {
  projects: ProjectModel[];
}

const Projects: FC<Props> = ({ projects }) => {
  useEntranceAnimation('.projects > *');

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      
      <div className='projects'>
        <h2>Projects</h2>

        {projects.map((project: ProjectModel) => {
          return (
            <Project key={project.id} project={project} />
          );
        })}
      </div>
    </Layout>
  );
}

export default Projects;