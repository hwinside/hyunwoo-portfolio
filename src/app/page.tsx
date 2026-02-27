"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Content from "@/components/Content";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Content />
        <Education />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
