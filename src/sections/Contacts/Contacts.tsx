import { Container, Section, Title } from "../../components";

export const Contacts = () => {
  const id = "experiences";
  return (
    <Section
      id={id}
      className="bg-gradient-to-b from-secondary-900/50 to-default-950"
    >
      <Container id={id + "_container"}>
        <Title name="Contacts" />
        <div className="h-[500px]"></div>
      </Container>
    </Section>
  );
};
