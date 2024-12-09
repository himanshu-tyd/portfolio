

import React from "react";
import SectionHeading from "./sub-components/SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./sub-components/ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="z-20 scroll-mt-28 ">
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

