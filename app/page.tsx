"use client";

import Header from "@/components/Header";
import Image from "next/image";
import fludeCursor from "@/hooks/useFluideCursor";
import { useEffect } from "react";
import Intro from "@/components/Intro";
import SectionDevider from "@/components/sub-components/SectionDevider";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const FluideCursor = () => {
    useEffect(() => {
      fludeCursor();
    }, []);
  };

  FluideCursor();

  return (
    <main className="flex flex-col items-center px-1">
      <div className="fixed top-0 left-0 z-1">
        <canvas id="fluid" className="w-screen h-screen" />
      </div>
      <Intro />
      <SectionDevider/>
      <About/>
      <Project/>
      <Skills/>
      <Experience/>
      <Contact/>

    </main>
  );
}
