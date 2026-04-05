import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { About } from "@/components/sections/About";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        {/* Decorative background orbs */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
          {/* Top-right accent glow */}
          <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-storm-accent/8 blur-[120px]" />
          {/* Bottom-left subtle glow */}
          <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-storm-accent/6 blur-[100px]" />
          {/* Mid-page faint orb */}
          <div className="absolute top-[45%] left-[60%] size-[300px] rounded-full bg-storm-accent/5 blur-[80px]" />
        </div>

        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
