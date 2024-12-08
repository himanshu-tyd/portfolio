"use client";

import Image from "next/image";
import React from "react";
import pic from "@/public/profile.jpg";
import { motion } from "motion/react";

const Intro = () => {
  return (
    <section className="z-10">
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

      <h1 className="text-center mt-10">
      <span className="font-bold">Hello, I'm Himanshu.</span> I'm a{" "}
<span className="font-bold">fresher</span> passionate about{" "}
<span className="italic">web development</span>. I enjoy building{" "}
<span className="italic">sites & apps</span> and exploring new{" "}
<span className="underline">technologies</span>. My focus is{" "}
<span className="font-bold">React (Next.js)</span> and creating intuitive{" "}
<span className="italic">user experiences</span>.

      </h1>
    </section>
  );
};

export default Intro;
