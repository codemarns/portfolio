import { Form } from "./components/Form";
import { Details } from "./components/Details";
import { Container, Section, Title } from "../../components";
import { contactsStyles } from "../../styles";

export const Contacts = () => {
  const id = "contacts";
  const { root, content } = contactsStyles;
  return (
    <Section id={id} className={root.base}>
      <Container id={id + "_container"}>
        <Title name="Contacts" />
        <div className={content.base}>
          <Details />
          <Form />
        </div>
      </Container>
    </Section>
  );
};
