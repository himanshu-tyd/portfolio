"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { ThemeType } from "@/lib/type";
import { toast } from "sonner";

interface ThemeProviderProps {
  children: React.ReactNode;
}

type ThemeContextTypes = {
  theme: ThemeType;
  toggleTheme: ()=>void,
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};
const ThemeContext = createContext<ThemeContextTypes | null>(null);

const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

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
    const localTheme = localStorage.getItem("theme") as ThemeType | null;
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

  const context = {
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
     toast.info("falied to switch theme something get wrong");
  }

  return context;
};
