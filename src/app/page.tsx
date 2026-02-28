"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Content from "@/components/Content";
import Interests from "@/components/Interests";
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
        <Skills />
        <Education />
        <Interests />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
