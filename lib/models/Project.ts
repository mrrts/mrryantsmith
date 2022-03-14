export interface ImageFormat {
  height: number;
  width: number;
  url: string;
}

export type ImageFormats = Record<'large'|'medium'|'small'|'thumbnail', ImageFormat>;

export interface Project {
  id: string;
  title: string;
  organization: string;
  description: string;
  startDate: string;
  images: {
    alternativeText: string,
    caption: string,
    url: string,
    width: number,
    height: number,
    formats: ImageFormats
  }[];
}