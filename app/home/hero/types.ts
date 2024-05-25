type ImageProps = {
  alt: string;
  url: string;
  thumbnail: string;
};

type ContentProps = {
  img: ImageProps;
  greeting: string;
  name: string;
  position: string;
  cta: string;
}

export type HeroProps = {
  id: string;
  title: string;
  content: ContentProps
};
