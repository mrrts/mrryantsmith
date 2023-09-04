import { groq } from "next-sanity";
import { PortableTextBlock, Reference } from "sanity";
import { client } from "./sanity/client";

const projectsQuery = groq`
    *[_type == "project"] | order(startDate desc)
    {
        _id, 
        title, 
        startDate, 
        organization, 
        description, 
        'images': images[] {
            _key,
            caption,
            alt,
            description,
            asset
        }
    }
`;

export type Project = {
  _id: string;
  title: string;
  startDate: string;
  organization: string;
  description: PortableTextBlock[];
  images: {
    _key: string;
    caption: string;
    alt: string;
    description: PortableTextBlock[];
    asset: Reference;
  }[];
};

export async function fetchProjects(): Promise<Project[]> {
  const projects = await client.fetch<Project[]>(projectsQuery);
  return projects;
}
