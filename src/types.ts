import type { Translatable } from "./utils/tData";

export interface Profile {
  name: string;
  title: Translatable;
  email: string;
  location: Translatable;
  shortBio: Translatable;
  bio: Translatable;
  avatar: string;
  heroVideo: string;
  cv: string;
}

export interface Project {
  id: string;
  title: Translatable;
  description: Translatable;
  category: string;
  thumbnail: string;
  images: string[];
  videoUrl: string;
  modelUrl: string;
  tags: string[];
  year: number;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Social {
  github: string;
  linkedin: string;
  youtube: string;
  behance: string;
  instagram: string;
  [key: string]: string;
}
