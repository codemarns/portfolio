"use client";

import React from "react";
import { contactsStyles } from "@/styles";
import { Title } from "@/components/title";
import { Section } from "@/common/section";
import { Container } from "@/common/container";
import { Details } from "./components/details";
import { Form } from "./components/form";
import { ContactsProps } from "./types";

export const Contacts: React.FC<ContactsProps> = (props) => {
  const id = "contacts";
  const { data } = props;
  const { root, content } = contactsStyles;

  return (
    <Section id={id} className={root.base}>
      <Container id={id + "_container"}>
        <Title name={data.title} />
        <div className={content.base}>
          <Details data={data.details} />
          <Form data={data.form} />
        </div>
      </Container>
    </Section>
  );
};
