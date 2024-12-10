"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import sun from "@/public/sun.svg";
import moon from "@/public/moon.svg";
import { TbMoonStars } from "react-icons/tb";
import { BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme == "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefets-color-schema-dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="fixed z-30 bottom-5 right-5 h-[3rem] w-[3rem] bg-white flex-center-both rounded-full shadow-2xl backdrop-blur-[0.5rem] bg-opacity-80 border-opacity-40 border hover:scale-[1.15] active:scale-105 transition-all 
      dark:bg-black   "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun className="text-black" /> : <TbMoonStars className="text-white" />}
    </button>
  );
};

export default ThemeSwitch;
