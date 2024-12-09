"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "motion/react";
import Image from "next/image";

type projectProps = (typeof projectsData)[number];

const ProjectCard = ({ title, description, tags, imageUrl }: projectProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["0 1", "1.33 1"],
  });

  const scalProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={divRef}
      style={{
        scale: scalProgress,
        opacity: opacityProgress,
        animation: scalProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <section className=" max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition sm:group-even:pl-8  ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 pr-2 n sm:pr-8 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
          <h3 className="text-2xl font-semibold"> {title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700  ">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto ">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider  rounded-full text-white "
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={"projects"}
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[intial]
        group-even:-left-40 
        group-hover:-traslate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2

        group-even:group-hover:traslate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2

        duration-[0.2s] 
        group-hover:scale-110



        ease-in-out"
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;
