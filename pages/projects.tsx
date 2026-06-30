import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { FC, MouseEvent } from "react";
import Layout from "../components/Layout";
import { fetchProjects, Project as ProjectModel } from "../lib/projects.api";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";
import { Project } from "../components/Project";
import styles from "../styles/pages/projects.module.css";

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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

  const anchorId = (project: ProjectModel): string =>
    slugify(project.title) || project._id;

  const handleJump =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    };

  return (
    <Layout>
      <Head>
        <title>Project Highlights</title>
      </Head>

      <div className="projects">
        <h2>Project Highlights</h2>

        {projects.length > 1 && (
          <nav className={styles.jumpNav} aria-label="Jump to a project">
            <span className={styles.jumpNavLabel}>Jump to:</span>
            {projects.map((project: ProjectModel) => {
              const id = anchorId(project);
              return (
                <a key={project._id} href={`#${id}`} onClick={handleJump(id)}>
                  {project.title}
                </a>
              );
            })}
          </nav>
        )}

        {projects.map((project: ProjectModel) => {
          return (
            <Project
              key={project._id}
              id={anchorId(project)}
              project={project}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
