"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import sun from "@/public/sun.svg";
import moon from "@/public/moon.svg";
import { TbMoonStars } from "react-icons/tb";
import { BsSun } from "react-icons/bs";
import { useTheme } from "@/context/ThemeProvider";



const ThemeSwitch = () => {
    
  const {toggleTheme ,theme}  = useTheme()

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
