import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Market } from "@/components/sections/market";
import { Nav } from "@/components/sections/nav";
import { NextRaid } from "@/components/sections/next-raid";
import { Recruitment } from "@/components/sections/recruitment";
import { Saga } from "@/components/sections/saga";
import { Skalds } from "@/components/sections/skalds";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Gallery />
        <Saga />
        <NextRaid />
        <Recruitment />
        <Market />
        <Skalds />
      </main>
      <Footer />
    </>
  );
}
