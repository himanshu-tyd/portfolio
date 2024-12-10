"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import pic from "@/public/profile.jpg";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/ActiveSectionProvider";
import { useInView } from "react-intersection-observer";
import useSectionView from "@/hooks/useInView";

const Intro = () => {
  const { ref } = useSectionView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 z-10 scroll-mt-[100rem] "
      id="home"
    >
      {/* hero image section */}

      <div className="flex-center-both">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={pic}
            alt="Himanshu Taviyad"
            width={195}
            height={195}
            quality={95}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
          <motion.span
            className="text-3xl absolute top-12 -right-1 bottom-0 waving-hand "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.3,
              stiffness: 125,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>

      {/* hero section text  */}

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl sm:text-4xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Himanshu.</span> I'm a{" "}
        <span className="font-bold">fresher</span> passionate about{" "}
        <span className="italic">web development</span>. I enjoy building{" "}
        <span className="italic">sites & apps</span> and exploring new{" "}
        <span className="underline">technologies</span>. My focus is{" "}
        <span className="font-bold">React (Next.js)</span> and creating
        intuitive <span className="italic">user experiences</span>.
      </motion.h1>

      <motion.div
        className="flex items-center justify-center flex-col sm:flex-row gap-3 px-4 text-lg font-medium "
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex-center gap-2 rounded-full outline-non  active:scale-100 hover:bg-gray-950  hover:scale-110 duration-[0.3s] group "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-75 group-hover:translate-x-1 duration-100 ease-in-out" />
        </Link>
        <a
          className="bg-white px-7 py-3 flex-center gap-2 rounded-full cursor-pointe  hover:scale-110 duration-[0.3s] active:scale-100 outline-none group  border-black/10 border  glassmorphism  "
          href="/CV.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 duration-[0.3s] ease-in-out" />{" "}
        </a>

        {/* icons sections  */}

        <a className="bg-white cursor-pointer p-4  flex-center rounded-full  hover:scale-110 duration-[0.3s] active:scale-100 outline-none group  border-black/10 border  ">
          <BsLinkedin className="text-[16px]  opacity-70 group-hover:opacity-100 duration-[0.3s]" />
        </a>
        <a className="bg-white cursor-pointer p-4  flex-center rounded-full  hover:scale-110 duration-[0.3s] active:scale-100 outline-none group  border-black/10 border ">
          <FaXTwitter className="text-[16px] opacity-70 group-hover:opacity-100 duration-[0.3s] " />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
