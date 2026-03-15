export type ProjectTag = {
  label: string;
  color?: string;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  tags: ProjectTag[];
  links: ProjectLink[];
  image?: string;
  featured?: boolean;
  context: "IUT" | "Personal";
};
