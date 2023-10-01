// import React from "react";
import cn from "classnames";
import { Routes, Route } from "react-router-dom";
import { Header, Container, Footer } from "./common";
import codemarnsLogo from "/codemarns-logo.svg";
import {
  Home,
  About,
  Landing,
  Experiences,
  ComingSoon,
  NotFound,
} from "./pages";

const data = {
  header: {
    logo: codemarnsLogo,
    name: ["_code", "marns"],
    menu: [
      { path: "/portfolio/about", page: "about" },
      { path: "/portfolio/landing", page: "landing" },
      { path: "/portfolio/experiences", page: "experiences" },
      { path: "/portfolio/coming-soon", page: "coming-soon" },
    ],
  },
};

function App() {
  const code = "codemarns";
  const headerData = data && data.header;

  const mainClasses = cn(
    code,
    "w-screen h-screen overflow-x-hidden overflow-y-auto"
  );

  return (
    <main className={mainClasses}>
      <Header data={headerData} />

      <Container>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/landing" element={<Landing />} />
          <Route path="/portfolio/experiences" element={<Experiences />} />
          <Route path="/portfolio/coming-soon" element={<ComingSoon />} />
          <Route path="/portfolio/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
