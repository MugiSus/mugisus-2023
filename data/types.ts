export interface ArticleProps {
  url: string;
  title: string;
  date: Date;
}

export interface CareerProps {
  date: Date;
  content: string;
}

export interface CreationProps {
  url: string;
  title: string;
  image: string;
  date: Date;
  content: string;
  features: string[];
}

export interface CreationFeatureProps {
  icon: string;
  title: string;
  filterDefault: string;
}