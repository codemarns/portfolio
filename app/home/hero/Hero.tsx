"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Image } from "@/app/components/Image";
import { Button } from "@/app/components/Button";
import { heroStyles } from "@/app/styles";
import { HeroProps } from "./types";

export const Hero: React.FC<HeroProps> = (props) => {
  const { id, title, content } = props;
  const { img, greeting, name, position, cta } = content;

  const { root, container, column } = heroStyles;

  return (
    <StyledHero id={id} className={root.base}>
      <div id={id + "-container"} className={container.base}>
        <div className={column.left.base}>
          <Image
            width="350px"
            corner="rounded"
            aspectRatio="1:1"
            alt={img.alt}
            src={img.url}
            thumbnail={img.thumbnail}
            className={column.left.image.base}
          />
        </div>

        <div className={column.right.base}>
          <div className={column.right.details.base}>
            <span className={column.right.details.greet.base}>{greeting}</span>
            <h1 className={column.right.details.name.base}>{name}</h1>
            <p
              className={column.right.details.title.base}
              style={{ WebkitTextFillColor: "transparent" }}
            >
              {position}
            </p>
          </div>
          <Link href={cta} className={column.right.details.cta.link}>
            <Button
              size="xl"
              label="Hire Me"
              color="secondary"
              corner="rounded"
              className={column.right.details.cta.base}
            />
          </Link>
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  min-height: 100vh;
  min-height: 100svh;

  @media screen and (max-height: 800px) {
    min-height: 100vh !important;
    min-height: 100svh !important;
  }
  @media screen and (max-height: 734px) and (max-width: 1023px) and (orientation: landscape) {
    height: auto;
  }
`;
