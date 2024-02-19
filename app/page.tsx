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
        <Portfolio data={data?.portfolio} />
        <Experiences data={data?.experiences} />
        <Skills data={data?.skills} />
        <Contacts data={data?.contacts} />
      </main>
    </>
  );
}
