import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaEarthAsia } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { postivus, promptX, webchatapp } from "@/public/project-images";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sass",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Figma",
  "Framer Motion",
] as const;

export const projectsData = [
  {
    title: "Positivus",
    description:
      "A Digital Marketing landing page design with mordern web tech enhancing UI/UX  ",
    tags: ["React", "Tailwind", "Swiper"],
    imageUrl: postivus,
    links: [
      {
        name: "website",
        href: "https://positivus-self.vercel.app/",
        icon: React.createElement(FaEarthAsia),
      },
      {
        name: "source",
        href: "https://github.com/himanshu-tyd/positivus",
        icon: React.createElement(FaGithub),
      },
    ],
  },
  {
    title: "WebChatApp",
    description:
      "A full-stack, real-time messaging application designed for seamless communication and a great user experience. 🌐💬",
    tags: ["React", "MongoDB", "Node.js", "Tailwind", "Express"],
    imageUrl: webchatapp,
    links: [
      {
        name: "website",
        href: "https://webchatapp-5ap3.onrender.com/",
        icon: React.createElement(FaEarthAsia),
      },
      {
        name: "source",
        href: "https://github.com/himanshu-tyd/webchatapp",
        icon: React.createElement(FaGithub),
      },
    ],
  },
  {
    title: "Prompt-X",
    description:
      "A platfrom where you can share you prompt's, Copy othere's prompts and use it.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: promptX,
    links: [
      {
        name: "website",
        href: "https://prompt-x-psi.vercel.app/",
        icon: React.createElement(FaEarthAsia),
      },
      {
        name: "source",
        href: "https://github.com/himanshu-tyd/prompt-x",
        icon: React.createElement(FaGithub),
      },
    ],
  },
] as const;
