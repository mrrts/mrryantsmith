import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { FC, useEffect } from "react";
import Layout from "../components/Layout";
import { fetchProjects, Project as ProjectModel } from "../lib/projects.api";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";
import { Project } from "../components/Project";

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const projects = await fetchProjects();
  return {
    props: {
      projects,
    },
  };
};

interface Props {
  projects: ProjectModel[];
}

const Projects: FC<Props> = ({ projects }) => {
  useEntranceAnimation(".projects > *");

  return (
    <Layout>
      <Head>
        <title>Project Highlights</title>
      </Head>

      <div className="projects">
        <h2>Project Highlights</h2>

        {projects.map((project: ProjectModel) => {
          return <Project key={project._id} project={project} />;
        })}
      </div>
    </Layout>
  );
};

export default Projects;
