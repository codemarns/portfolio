// import { Header } from "./common";
import { About, Experiences, Hero, Skills } from "./sections";
import { ScrollToTop } from "./components";

function App() {
  return (
    <>
      {/* <Header /> */}
      <main className="">
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <section
          id="contact"
          className="h-[700px] w-full px-8 py-20 bg-success"
        >
          <div className="w-full h-full bg-white/30">Contacts</div>
        </section>
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
