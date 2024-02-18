type ImageProps = {
  alt: string;
  url: string;
  thumbnail: string;
};

type DataProps = {
  img: ImageProps;
  greeting: string;
  name: string;
  position: string;
  cta: string;
};

export type HeroProps = {
  data: DataProps;
};
