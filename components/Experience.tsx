import React from "react";
import SectionHeading from "./sub-components/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import useSectionView from "@/hooks/useInView";
import { useTheme } from "@/context/ThemeProvider";

const Experience = () => {
  const { ref } = useSectionView("Experience", 0.6);
  const { theme } =useTheme()

  const isTheme=theme==='light'

  return (
    <section
      ref={ref}
      id="experience"
      className="z-20 scroll-mt-28 mb-28 sm:mb-40  "
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.toReversed().map((item, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              className=""
              contentStyle={{
                background: isTheme ?  ` #f3f4f6"` : `rbga(255,255,0.05)`,
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color:'black'
              }}
              contentArrowStyle={{
                borderRight:isTheme ? "0.4rem solid #9ca3af" : '0.4rem solid rgba(255, 255,255, 0.5)' ,
              }}
              date={item.date}
              dateClassName="lg:dark:text-white/95  "
              icon={item.icon}
              iconStyle={{
                background:isTheme ?  "black" : 'white' ,
                fontSize: "1.5rem",
                color:isTheme  ? 'white' :  "black",

              }}
            >
              <h3 className="font-semibold capitalize dark:text-black">{item.title}</h3>
              <p className="font-normal !text-sm !mt-0 text-black/70  ">
                {item.location}
              </p>
              <p className="dark:text-black/95">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
