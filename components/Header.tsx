"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/ActiveSectionProvider";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative flex justify-center ">
      <motion.div
        className="fixed w-full top-0  h-[4.5rem] rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.7rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full  dark:bg-black/[0.5]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 dark:text-gray-200 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.name}
              className="h-3/4 flex-center-both relative "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={`p-3  hover:duration-[0.4s] duration-75 ${
                  activeSection === link.name
                    ? "text-white dark:text-black "
                    : "hover:text-gray-950 dark:hover:text-gray-50 "
                }  `}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name === activeSection && (
                  <motion.span
                    className="bg-black rounded-full absolute inset-0 -z-10 dark:bg-white  "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
