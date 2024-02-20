type Data = {
  id: string;
  alt: string;
  img: string;
  tag: string;
  title: string;
  description: string;
  link: string;
};

type Props = {
  title: string;
  portfolio: Data[];
};

export type PortfolioProps = {
  data: Props;
};
