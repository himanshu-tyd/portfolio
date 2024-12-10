import React from "react";
import SectionHeading from "./sub-components/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import useSectionView from "@/hooks/useInView";

const Experience = () => {

    const {ref}=useSectionView("Experience", 0.6)

  return (
    <section ref={ref} id="experience" className="z-20 scroll-mt-28 mb-28 sm:mb-40  " >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.toReversed().map((item, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "black",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              <h3 className="font-semibold capitalize" >{item.title}</h3>
              <p className="font-normal !text-sm !mt-0 text-black/[0.6] " >{item.location}</p>
              <p className="" >{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
