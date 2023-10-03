import React from "react";
import { Container } from "../common";
import {
  Button,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "../components";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Home: React.FC<Props> = (props) => {
  return (
    <section
      {...props}
      className={`HOME-PAGE w-full h-screen pt-20 bg-[url('/wallpaper.jpg')] bg-right-top bg-no-repeat bg-cover`}
    >
      <Container
        size="xl"
        paddingX="xl"
        paddingY="2xl"
        className="h-full xl:bg-[url('/marni-black-and-white.png')] bg-left-bottom bg-no-repeat bg-contain"
      >
        <Container
          size="md"
          paddingX="lg"
          className="xl:!ml-auto xl:!mr-0 h-full flex items-center"
        >
          <div className="flex flex-col justify-center gap-8">
            <span className="text-default-300 text-xl">Marnien Cueba</span>
            <span className="text-4xl">
              <span className="text-success font-semibold">
                FRONTEND DEVELOPER.
              </span>
            </span>
            <p className="text-default-300 leading-8">
              I am a UI/UX / front-end developer with a passion for designing
              user interfaces and UX design. I enjoy creating components that
              will be used across multiple projects. I create dynamic and
              responsive interfaces that give excellent user experiences.
            </p>

            <div className="flex flex-row flex-wrap items-center gap-8">
              <Button
                label="HIRE ME"
                size="lg"
                color="success"
                variant="solid"
                corner="soft-edge"
                className="grow xs:grow-0"
              />
              <Button
                label="PORTFOLIO"
                size="lg"
                color="success"
                variant="outline"
                corner="soft-edge"
                className="grow xs:grow-0"
              />
            </div>

            <div className="w-full max-w-[425px] flex items-center justify-between mt-16">
              <Button
                size="xl"
                color="default"
                variant="ghost"
                corner="rounded"
                className="hover:fill-success"
                icon={<FacebookIcon size={"lg"} />}
              />
              <Button
                size="xl"
                color="default"
                variant="ghost"
                corner="rounded"
                className="hover:fill-success"
                icon={<GithubIcon size={"lg"} />}
              />
              <Button
                size="xl"
                color="default"
                variant="ghost"
                corner="rounded"
                className="hover:fill-success"
                icon={<LinkedInIcon size={"lg"} />}
              />
              <Button
                size="xl"
                color="default"
                variant="ghost"
                corner="rounded"
                className="hover:fill-success"
                icon={<YoutubeIcon size={"lg"} />}
              />
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
