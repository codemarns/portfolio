import { About, Contacts, Experiences, Hero, Skills } from "./sections";
import { ScrollToTop } from "./components";
import { data } from "./data";

function App() {
  return (
    <main className="">
      <Hero data={data.hero} />
      <About />
      <Skills />
      <Experiences />
      <Contacts />
      <ScrollToTop />
    </main>
  );
}

export default App;
