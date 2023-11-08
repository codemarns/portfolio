import { Container, Section, Title } from "../../components";
import { experiencesStyles } from "../../styles";

export const Experiences = () => {
  const id = "experiences";
  const { root } = experiencesStyles;

  return (
    <Section id={id} className={root.base}>
      <Container id={id + "_container"}>
        <Title name="Experiences" />
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          obcaecati quaerat eligendi saepe dolores quo? Minima est ratione
          doloremque, voluptatibus aspernatur omnis rem ullam, ipsa earum amet
          tempore laborum quia.
        </div>
      </Container>
    </Section>
  );
};
