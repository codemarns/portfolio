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
      { path: "/home", page: "home" },
      { path: "/about", page: "about" },
      { path: "/landing", page: "landing" },
      { path: "/experiences", page: "experiences" },
      { path: "/coming-soon", page: "coming-soon" },
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
