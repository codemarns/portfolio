import {
  Hero,
  About,
  Experiences,
  Portfolio,
  Skills,
  Contacts,
} from "./sections";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-screen">
        <Hero />
        <About />
        <Experiences />
        <Portfolio />
        <Skills />
        <Contacts />
      </main>
    </>
  );
}
