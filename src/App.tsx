import { About, Contacts, Experiences, Hero, Skills } from "./sections";
import { ScrollToTop } from "./components";

function App() {
  return (
    <main className="">
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Contacts />
      <ScrollToTop />
    </main>
  );
}

export default App;
