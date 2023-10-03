import React from "react";
import { Container } from "../common";

type Props = React.HTMLAttributes<HTMLDivElement>;

const About: React.FC<Props> = (props) => {
  const commonArticleClasses = "w-full h-[300px] bg-default-700";
  return (
    <Container className="min-h-full">
      <div {...props} className="ABOUT-PAGE w-full h-auto">
        <section className="w-full h-[calc(70vh-64px)] bg-default-800">
          About Section
        </section>
        <Container size="xl" paddingX="md" className="space-y-4">
          <article className={commonArticleClasses}>About Article</article>
          <article className={commonArticleClasses}>About Article</article>
          <article className={commonArticleClasses}>About Article</article>
          <article className={commonArticleClasses}>About Article</article>
        </Container>
      </div>
    </Container>
  );
};

export default About;
