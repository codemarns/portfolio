import { Container, Section, Title } from "../../components";
import { aboutStyles } from "../../styles";

export const About = () => {
  const id = "about";
  const { root, pattern, container, description } = aboutStyles;

  return (
    <Section id={id} className={root.base}>
      <img src={"pattern.svg"} alt="pattern" className={pattern.base} />
      <Container id={id + "_container"} size="lg" className={container.base}>
        <Title name="About Me" />

        <div className={description.wrapper}>
          <p className={description.base}>
            I am <b>Marnien Cueba</b>. You can call me <b>Marns</b> for short,
            and I live in Cebu, Philippines. An IT college graduate at the
            Center for Industrial Technology and Enterprise | CITE Technical
            Institute, Inc.
          </p>
          <p className={description.base}>
            A detail-oriented, UI/UX Designer and Frontend Developer with over 7
            years of office experience, focusing on creating components that
            will be used across various projects, designing user interfaces, and
            user experience design. I am a collaborative and creative frontend
            developer with experience in HTML, CSS, React, JavaScript,
            TypeScript, and other front-end frameworks. I create dynamic and
            responsive user interfaces that give excellent user experiences.
          </p>
        </div>
      </Container>
    </Section>
  );
};
