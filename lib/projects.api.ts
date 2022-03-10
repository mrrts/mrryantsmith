import { Project } from "./models/Project";
import { Document as RTEDocument } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { orderBy } from 'lodash';

const PROJECTS_QUERY = `
{
	projectCollection {
		items {
			sys {
				id
			}
			title
			organization
			description {
				json
			}
			order
			imagesCollection {
				items {
					title
					description
					url
          width
          height
				}
			}
		}
	}
}
`;

export interface ProjectItemDto {
  sys: { id: string };
  title: string;
  organization: string;
  description: { json: RTEDocument };
  order: number;
  imagesCollection: {
    items: {
      title: string,
      description: string,
      url: string,
      width: number,
      height: number
    }[];
  };
}

export const fetchProjects = async (): Promise<Project[]> => {
  const resp = await fetch(process.env.CONTENTFUL_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      query: PROJECTS_QUERY
    })
  });

  const json = await resp.json();
  const itemDtos: ProjectItemDto[] = json?.data?.projectCollection?.items ?? [];

  const projects: Project[] = itemDtos.map(projectItemDtoToProject);

  return orderBy(
    projects,
    'order',
    ['ASC']
  ) as Project[];
};

export const projectItemDtoToProject = (itemDto: ProjectItemDto): Project => {
  return {
    id: itemDto.sys.id,
    title: itemDto.title,
    organization: itemDto.organization,
    description: documentToHtmlString(itemDto.description.json),
    order: itemDto.order,
    images: itemDto.imagesCollection.items
  };
};
