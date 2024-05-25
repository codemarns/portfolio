"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/cn";
import { Title } from "@/app/components/Title";
import { Section } from "@/app/common/Section";
import { Container } from "@/app/common/Container";
import { PortfolioProps } from "./types";

export const Portfolio: React.FC<PortfolioProps> = (props) => {
  const { id, title, content } = props;
  const { portfolio } = content;

  return (
    <Section id={id} className="bg-darker">
      <Container id={id + "-container"}>
        <Title name={title} />

        <div className="grid grid-cols-1 xs:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-12">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="h-auto flex-1 bg-secondary/5 border border-secondary/10 rounded-xl overflow-hidden"
            >
              <div className="h-[200px] w-full p-16 bg-darker flex items-center justify-center">
                <Image
                  priority
                  width={450}
                  height={200}
                  alt={item.alt}
                  src={item.img}
                  className={cn(
                    "h-full w-full object-contain",
                    item.id === "23point5" ? "invert" : ""
                  )}
                />
              </div>
              <div className="h-auto w-full p-6 text-left space-y-3">
                <span className="block text-xl text-secondary font-normal">
                  {item.title}
                </span>
                <span className="block text-sm text-secondary">{item.tag}</span>
                <p className="leading-relaxed !mb-3 line-clamp-4">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer outline-none h-12 w-full px-8 inline-flex items-center justify-center bg-transparent rounded-xl border border-secondary/10 hover:border-secondary text-light/75 hover:text-secondary tracking-wider font-normal common-transition"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
