import { ImageFormat, ImageFormats, Project } from "./models/Project";
import { marked } from 'marked';
import { orderBy, map } from 'lodash';

const PROJECTS_QUERY = `
{
  projects {
    data {
      id
      attributes {
        title
        description
        organization
        startDate
        images {
          data {
            attributes {
              alternativeText
              caption
              url
              formats 
              height
              width
            }
          }
        }
      }
    }
  }
}
`;

interface ImageAttributes {
  alternativeText: string;
  caption: string;
  url: string;
  formats: ImageFormats;
  height: number;
  width: number;
}

interface ProjectItemDtoAttributes {
  title: string;
  organization: string;
  description: string;
  startDate: string;
  images: { data: { attributes: ImageAttributes }[] };
}

export interface ProjectItemDto {
  id: string;
  attributes: ProjectItemDtoAttributes;
}

export const fetchProjects = async (): Promise<Project[]> => {
  const resp = await fetch(process.env.STRAPI_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.STRAPI_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      query: PROJECTS_QUERY
    })
  });

  const json = await resp.json();
  const itemDtos: ProjectItemDto[] = json?.data?.projects?.data ?? [];

  const projects: Project[] = itemDtos.map(projectItemDtoToProject);

  return orderBy(
    projects,
    'startDate',
    'desc'
  ) as Project[];
};

export const projectItemDtoToProject = (itemDto: ProjectItemDto): Project => {
  return {
    id: itemDto.id,
    title: itemDto.attributes.title,
    organization: itemDto.attributes.organization,
    description: marked.parse(itemDto.attributes.description),
    startDate: new Date(itemDto.attributes.startDate).toISOString(),
    images: itemDto.attributes.images?.data?.map((imgAttrs) => imgAttrs.attributes) ?? []
  };
};
