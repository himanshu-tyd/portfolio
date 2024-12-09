"use client";

import React, { useContext, useState , createContext} from "react";
import { links } from "@/lib/data";


type SectionName = (typeof links)[number]["name"];

interface activeSectionProviderProps {
  children: React.ReactNode;
}

type ContextType={
  activeSection:SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

const ActiveSectionContext = createContext<ContextType | null >(null);

const ActiveSectionProvider = ({ children }: activeSectionProviderProps) => {

  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;


export const useActiveSectionContext=()=>{
  const context=  useContext(ActiveSectionContext)
  if(context==null){
    throw new Error('Use active setion must be used with an acitveSectionProvider')
  }

  return context
}