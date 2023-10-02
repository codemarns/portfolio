import React from "react";
import { Container } from "../common";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Home: React.FC<Props> = (props) => {
  const commonArticleClasses = "w-full h-[300px] bg-default-700";
  return (
    <div {...props} className="HOME-PAGE w-full h-auto">
      <section className="w-full h-[calc(70vh-64px)] bg-default-800">
        Home Section
      </section>
      <Container className="xl:container p-4 space-y-4 bg-white">
        <article className={commonArticleClasses}>Home Article</article>
        <article className={commonArticleClasses}>Home Article</article>
        <article className={commonArticleClasses}>Home Article</article>
        <article className={commonArticleClasses}>Home Article</article>
      </Container>
    </div>
  );
};

export default Home;
