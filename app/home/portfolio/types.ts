type Data = {
  id: string;
  alt: string;
  img: string;
  tag: string;
  title: string;
  description: string;
  link: string;
};

type ContentProps = {
  portfolio: Data[];
}

export type PortfolioProps = {
  id: string;
  title: string;
  content: ContentProps
};
