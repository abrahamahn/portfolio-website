export interface HeaderItem {
  name: string;
  description: string;
}

export interface SocialMediaItem {
  iconName: React.ReactNode;
  link: string;
}

export interface AboutItem {
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  skillPercent: string;
}

export interface PortfolioItem {
  link: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  postedDate: string;
  categories: string[];
  stacks: string[];
}

export interface BlogItem {
  link: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  postedDate: string;
  categories: string[];
}