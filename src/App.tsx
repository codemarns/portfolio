// import { Header } from "./common";
import { About, Hero } from "./sections";
import { ScrollToTop } from "./components";

function App() {
  return (
    <>
      {/* <Header /> */}
      <main className="">
        <Hero />
        <About />
        <section id="skills" className="h-[700px] w-full px-8 py-20 bg-info">
          <div className="w-full h-full bg-white/30">Skills</div>
        </section>
        <section
          id="designs"
          className="h-[700px] w-full px-8 py-20 bg-success"
        >
          <div className="w-full h-full bg-white/30">Designs</div>
        </section>
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
