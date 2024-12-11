import React from "react";
import { extractYear } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="text-center mb-10 px-4 text-gray-500 z-20 dark:text-white/50 ">
      <small className=" block  text-xs sm:text-sm ">
        &copy; {extractYear()} Himanshu. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Cursify, React Email & Resend.
      </p>
    </footer>
  );
};

export default Footer;
