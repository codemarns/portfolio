import { About, Contacts, Experiences, Hero, Skills } from "./sections";
import { ScrollToTop } from "./components";
import { data } from "./data";

function App() {
  return (
    <main className="">
      <Hero data={data.hero_section} />
      <About data={data.about_section} />
      <Skills data={data.skills_section} />
      <Experiences />
      <Contacts />
      <ScrollToTop />
    </main>
  );
}

export default App;
