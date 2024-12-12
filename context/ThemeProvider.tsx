"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { ThemeType } from "@/lib/type";
import { toast } from "sonner";


interface themeProvideProps {  //theme props
  children: React.ReactNode;
}


export type ThemeContextTypes = {    //theme context types
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};


const ThemeContext = createContext<ThemeContextTypes | null>(null);

const ThemeContextProvider = ({ children }: themeProvideProps) => {
  const [theme, setTheme] = useState<ThemeType>(null); //intial state 

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
    const localTheme = localStorage.getItem("theme") as ThemeType  | null
    if (localTheme!==null) {
      if (localTheme == "dark") {
        setTheme('dark')
        document.documentElement.classList.add("dark");
      }
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-schema:dark)").matches) {
      console.log('medial match check ran')
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }else{
      setTheme('light')
    }
  }, []);

  let context = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context == null) {
    return toast.info("falied to switch theme something get wrong");
  }

  return context;
};
