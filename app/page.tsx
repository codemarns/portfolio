"use client";

import { useEffect, useState } from "react";
import { Header } from "@/common/header/header";
import { Footer } from "@/common/footer";
import { data } from "@/app/api/data";
import {
  Hero,
  About,
  Experiences,
  Portfolio,
  Skills,
  Contacts,
} from "./sections";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading)
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center gap-2">
        <div
          className="w-60 h-60 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url("codemarns.gif")` }}
        />
      </div>
    );

  return (
    <>
      <Header />
      <main className="min-h-screen w-full">
        <Hero data={data?.hero} />
        <About data={data?.about} />
        <Portfolio data={data?.portfolio} />
        <Experiences data={data?.experiences} />
        <Skills data={data?.skills} />
        <Contacts data={data?.contacts} />
      </main>
      <Footer />
    </>
  );
}
