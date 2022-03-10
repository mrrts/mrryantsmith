import { FC } from 'react';
import { Project as ProjectModel } from '../lib/models/Project';
import styles from './Project.module.css';
import cn from 'classnames';
import { useEntranceAnimation } from '../lib/hooks/useEntranceAnimation.hook';
import { ArrayElement } from '../lib/types';
import Image from 'next/image';

interface Props {
  project: ProjectModel;
}

export const Project: FC<Props> = ({ project }) => {
  useEntranceAnimation('.project-container > *');

  return (
    <div className={cn(styles.projectContainer, 'project-container')}>
      <h3 className={styles.projectHeading}>{project.title}</h3>
      <p className={styles.projectOrganization}>{project.organization}</p>
      <div className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: project.description }} />
      {project.images?.length > 0 && (
        <div className={styles.projectGallery}>
          {project.images.map((image: ArrayElement<ProjectModel['images']>) => {
            return (
              <div key={image.url} className={styles.image} aria-describedby={`desc-${image.url}`}>
                <a className={styles.imageLink} href={image.url} target='_blank'>
                  <Image
                    src={image.url}
                    alt={image.title}
                    height={image.height}
                    width={image.width}
                  />
                </a>
                <div id={`desc-${image.url}`} className={styles.imageCaption}>
                  <p className={styles.imageTitle}>{image.title}</p>
                  <p className={styles.imageDescription}>{image.description}</p>  
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};