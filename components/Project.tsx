import { FC } from "react";
import { Project as ProjectModel } from "../lib/projects.api";
import styles from "./Project.module.css";
import cn from "classnames";
import { useEntranceAnimation } from "../lib/hooks/useEntranceAnimation.hook";
import { ArrayElement } from "../lib/types";
import Image from "next/image";
import { toHTML } from "@portabletext/to-html";
import { urlFor } from "../lib/sanity/imageBuilder";

interface Props {
  project: ProjectModel;
}

export const Project: FC<Props> = ({ project }) => {
  useEntranceAnimation(".project-container > *");

  return (
    <div className={cn(styles.projectContainer, "project-container")}>
      <h3 className={styles.projectHeading}>{project.title}</h3>
      <p className={styles.projectOrganization}>{project.organization}</p>
      <div
        className={styles.projectDescription}
        dangerouslySetInnerHTML={{ __html: toHTML(project.description) }}
      />
      {project.images?.length > 0 && (
        <div className={styles.projectGallery}>
          {project.images.map((image: ArrayElement<ProjectModel["images"]>) => {
            return (
              <div
                key={image._key}
                className={styles.image}
                aria-describedby={`desc-${image._key}`}
              >
                <a
                  className={styles.imageLink}
                  href={urlFor(image).url()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={urlFor(image).width(350).maxHeight(250).url()}
                    alt={image.alt}
                    width={350}
                    height={250}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </a>
                <div id={`desc-${image._key}`} className={styles.imageCaption}>
                  <p className={styles.imageTitle}>{image.caption}</p>
                  <div
                    className={styles.imageDescription}
                    dangerouslySetInnerHTML={{
                      __html: toHTML(image.description),
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
