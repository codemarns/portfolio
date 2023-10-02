import React from "react";
import { Container } from "../common";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Experiences: React.FC<Props> = (props) => {
  const commonArticleClasses = "w-full h-[300px] bg-default-700";
  return (
    <div {...props} className="EXPERIENCES-PAGE w-full h-auto">
      <section className="w-full h-[calc(70vh-64px)] bg-default-800">
        Experiences Section
      </section>
      <Container className="xl:container p-4 space-y-4">
        <article className={commonArticleClasses}>Experiences Article</article>
        <article className={commonArticleClasses}>Experiences Article</article>
        <article className={commonArticleClasses}>Experiences Article</article>
        <article className={commonArticleClasses}>Experiences Article</article>
      </Container>
    </div>
  );
};

export default Experiences;
