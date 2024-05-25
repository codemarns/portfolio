"use client";

import React from "react";
import { contactsStyles } from "@/app/styles";
import { Title } from "@/app/components/Title";
import { Section } from "@/app/common/section";
import { Container } from "@/app/common/container";
import { Details } from "./components/details";
import { Form } from "./components/form";
import { ContactsProps } from "./types";

export const Contacts: React.FC<ContactsProps> = (props) => {
  const { id, title, ...rest } = props;
  const { details, form } = rest.content;
  const { root, content } = contactsStyles;

  return (
    <Section id={id} className={root.base}>
      <Container id={id + "-container"}>
        <Title name={title} />
        <div className={content.base}>
          <Details data={details} />
          <Form data={form} />
        </div>
      </Container>
    </Section>
  );
};
