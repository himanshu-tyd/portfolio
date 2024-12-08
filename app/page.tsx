"use client";

import Header from "@/components/Header";
import Image from "next/image";
import fludeCursor from "@/hooks/useFluideCursor";
import { useEffect } from "react";
import Intro from "@/components/Intro";

export default function Home() {
  const FluideCursor = () => {
    useEffect(() => {
      fludeCursor();
    }, []);
  };

  FluideCursor();

  return (
    <main className="">
      <div className="fixed top-0 left-0 z-1">
        <canvas id="fluid" className="w-screen h-screen" />
      </div>
      <Intro />
    </main>
  );
}
