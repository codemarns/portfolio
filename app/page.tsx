import {
  Hero,
  About,
  Experiences,
  Portfolio,
  Skills,
  Contacts,
} from "./sections";
import { data } from "./api/data";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full">
        <Hero data={data?.hero} />
        <About data={data?.about} />
        <Experiences />
        <Portfolio />
        <Skills />
        <Contacts />
      </main>
    </>
  );
}
