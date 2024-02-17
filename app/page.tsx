import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-screen">
        <section id="hero" className="h-[800px] w-full py-16 px-8 bg-white">
          <h1>Hero Banner Section</h1>
        </section>
        <section
          id="about"
          className="h-[800px] w-full py-16 px-8 bg-slate-100"
        >
          <h1>About Section</h1>
        </section>
        <section
          id="experiences"
          className="h-[800px] w-full py-16 px-8 bg-white"
        >
          <h1>Experiences Section</h1>
        </section>
        <section
          id="portfolio"
          className="h-[800px] w-full py-16 px-8 bg-slate-100"
        >
          <h1>Portfolio Section</h1>
        </section>
        <section id="skills" className="h-[800px] w-full py-16 px-8 bg-white">
          <h1>Skills Section</h1>
        </section>
        <section
          id="contacts"
          className="h-[800px] w-full py-16 px-8 bg-slate-100"
        >
          <h1>Contacts Section</h1>
        </section>
      </main>
    </>
  );
}
