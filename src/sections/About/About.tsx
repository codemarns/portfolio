import { Container, Section } from "../../components";
import { aboutStyles } from "../../styles";

export const About = () => {
  const id = "about";
  const { root, title, description } = aboutStyles;

  return (
    <Section id={id} className={root.base}>
      <Container id={id + "_container"} size="lg">
        <h2 className={title.base}>About Me</h2>
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
