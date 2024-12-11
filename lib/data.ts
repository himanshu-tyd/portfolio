import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaEarthAsia } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { postivus, webchatapp } from "@/public/project-images";


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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
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
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: webchatapp,
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
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
] as const;
