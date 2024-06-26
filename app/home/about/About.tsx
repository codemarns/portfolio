"use client";

import React from "react";
import Image from "next/image";
import { Title } from "@/app/components/Title";
import { Section } from "@/app/common/Section";
import { Container } from "@/app/common/Container";
import { aboutStyles } from "@/app/styles";
import { AboutProps } from "./types";

export const About: React.FC<AboutProps> = (props) => {
  const { id, title, content } = props;

  const { root, container, description } = aboutStyles;

  return (
    <Section id={id} className={root.base}>
      <Container id={id + "-container"} className={container.base} size="lg">
        <Title name={title} />
        <div className={description.wrapper}>
          {content.description.map((desc, index) => (
            <p key={index} className={description.base}>
              {desc}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
};
