export interface Project {
  id: string;
  title: string;
  organization: string;
  description: string;
  order: number;
  images: {
    title: string,
    description: string,
    url: string,
    width: number,
    height: number
  }[];
}