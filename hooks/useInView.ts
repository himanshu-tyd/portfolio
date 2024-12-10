import { useActiveSectionContext } from "@/context/ActiveSectionProvider";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "@/lib/data";
import type { SectionNameType } from "@/lib/type";

const useSectionView = (sectionIdName: SectionNameType , threshold=0.75) => {
  const { setActiveSection, TimeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold
  });

  useEffect(() => {
    if (inView && Date.now() - TimeOfLastClick > 1000) {
      setActiveSection(sectionIdName);
    }
  }, [inView, setActiveSection, TimeOfLastClick]);

  return { ref };
};

export default useSectionView;
