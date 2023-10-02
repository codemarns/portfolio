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
  SignUp,
  Login,
} from "./pages";

const data = {
  header: {
    logo: codemarnsLogo,
    name: ["_code", "marns"],
    menu: [
      { path: "/portfolio/about", page: "about" },
      { path: "/portfolio/experiences", page: "experiences" },
    ],
  },
};

function App() {
  const login = false;
  const signUp = false;
  const landing = false;
  const comingSoon = false;

  const code = "codemarns";
  const headerData = data && data.header;

  const mainClasses = cn(
    code,
    "w-screen h-screen overflow-x-hidden overflow-y-auto"
  );

  if (signUp) return <SignUp />
  if (login) return <Login />
  if (landing) return <Landing />
  if (comingSoon) return <ComingSoon logo={codemarnsLogo} />;

  return (
    <main className={mainClasses}>
      <Header data={headerData} />

      <Container>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/experiences" element={<Experiences />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
