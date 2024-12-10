import React from "react";
import SectionHeading from "./sub-components/SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./sub-components/ProjectCard";
import useSectionView from "@/hooks/useInView";


const Project = () => {
  const { ref } = useSectionView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="z-20 scroll-mt-28 mb-28 ">
      <SectionHeading>My Project</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Project;
