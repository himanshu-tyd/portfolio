"use client";

import React, { useContext, useState, createContext } from "react";
import { links } from "@/lib/data";
import { SectionNameType } from "@/lib/type";  // This wil give us types of section




interface activeSectionProviderProps {
  children: React.ReactNode;
}


// types of context
type ContextType = {
  activeSection: SectionNameType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNameType>>;
  TimeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ContextType | null>(null);

const ActiveSectionProvider = ({ children }: activeSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionNameType>("Home"); //header state 
  const [TimeOfLastClick, setTimeOfLastClick] = useState<number>(0); // We keep track of Cick on header for for setting activation section if for 1s then after that state is going to be changed

  //context data
  const context = {
    activeSection,
    setActiveSection,
    TimeOfLastClick,
    setTimeOfLastClick,
  };

  return (
    <ActiveSectionContext.Provider value={context}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;


// this is return data of context
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context == null) {
    throw new Error(
      "Use active setion must be used with an acitveSectionProvider"
    );
  }

  return context;
};
