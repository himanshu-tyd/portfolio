import React from "react";
import SectionHeading from "./sub-components/SectionHeading";
import { skillsData } from "@/lib/data";
import useSectionView from "@/hooks/useInView";
import { motion } from "motion/react";
import { animate, delay } from "motion";


const fadeInAnimationVariant={
    intial:{
        opacity:0,
        y:100
    },
    animate: (i:number)=>( {
        opacity:1,
        y:0,
        transition:{
            delay: 0.05 *i,
        }
    })
}

const Skills = () => {
  const { ref } = useSectionView("Skills", 0.5);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 z-20 "
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center text-lg text-white gap-2 ">
        {skillsData.map((skils, i) => (
          <motion.li
            key={i}
            className="bg-gray-950 dark:bg-white dark:text-black font-medium border border-gray-400/[0.5] rounded-xl px-3 py-1"
            variants={fadeInAnimationVariant}
            initial='intial'
            whileInView='animate'
            custom={i}
            viewport={{
                once:true
            }}
          >
            {skils}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
