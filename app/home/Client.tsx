import { FC } from "react";
import { Hero } from "./hero/Hero";
import { About } from "./about/About";
import { Skills } from "./skills/Skills";
import { Contacts } from "./contacts/Contacts";
import { Portfolio } from "./portfolio/Portfolio";
import { Experiences } from "./experiences/Experiences";

import { HeroProps } from "./hero/types";
import { AboutProps } from "./about/types";
import { SkillsProps } from "./skills/types";
import { ContactsProps } from "./contacts/types";
import { PortfolioProps } from "./portfolio/types";
import { ExperienceProps } from "./experiences/types";

interface ClientProps {
  hero: HeroProps;
  about: AboutProps;
  portfolio: PortfolioProps;
  experiences: ExperienceProps;
  skills: SkillsProps;
  contacts: ContactsProps;
}

export const Client: FC<ClientProps> = (props) => {
  const { hero, about, portfolio, experiences, skills, contacts } = props;

  return (
    <>
      <Hero {...hero} />
      <About {...about} />
      <Portfolio {...portfolio} />
      <Experiences {...experiences} />
      <Skills {...skills} />
      <Contacts {...contacts} />
    </>
  );
};
