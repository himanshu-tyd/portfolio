"use client";


import React from "react";
import { TbMoonStars } from "react-icons/tb";
import { BsSun } from "react-icons/bs";
import { ThemeContextTypes, useTheme } from "@/context/ThemeProvider";



const ThemeSwitch = () => {
    
  const {toggleTheme ,theme}  = useTheme() as ThemeContextTypes

  return (
    <button
      className="fixed z-50 bottom-5 right-5 h-[3rem] w-[3rem] bg-white flex-center-both rounded-full shadow-2xl backdrop-blur-[0.5rem] bg-opacity-80 border-opacity-40 border hover:scale-[1.15] active:scale-105 transition-all 
      dark:bg-black   "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun className="text-black" /> : <TbMoonStars className="text-white" />}
    </button>
  );
};

export default ThemeSwitch;
