"use client";

import { useEffect, useState } from "react";
import { Loading } from "@/app/components/Loading";
import { Header } from "@/app/common/header/header";
import { Footer } from "@/app/common/footer";
import { data } from "@/app/api/data";
import { Client } from "./home/Client";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <main className="min-h-screen w-full">
        <Client {...data} />
      </main>
      <Footer />
    </>
  );
}
