import { Header } from "./common";
import { Hero } from "./sections";
import { ScrollToTop } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <section id="b" className="h-[700px] w-full px-8 py-20 bg-secondary">
          <div className="w-full h-full bg-white/30">Section B</div>
        </section>
        <section id="c" className="h-[700px] w-full px-8 py-20 bg-info">
          <div className="w-full h-full bg-white/30">Section C</div>
        </section>
        <section id="d" className="h-[700px] w-full px-8 py-20 bg-success">
          <div className="w-full h-full bg-white/30">Section D</div>
        </section>
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
