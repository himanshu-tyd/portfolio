import React from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import {
  postivus,
  promptX,
  webchatapp,
  nikeclone,
  linkdify,
} from "@/public/project-images";
import { FaShopify } from "react-icons/fa";

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
    title: "Droppshiping",
    location: "India, GJ",
    description:
      "I worked as a self-employed e-commerce specialist, managing multiple Shopify stores and implementing strategies that led to a 50% increase in revenue. I also ran successful Facebook ad campaigns, boosting engagement and sales by 60% through targeted digital marketing efforts.",
    icon: React.createElement(FaShopify),
    date: "2020 - 2022",
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
      "A full-stack, real-time messaging application designed for seamless communication and a great user experience.",
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
    title: "Nike Clone",
    description:
      "Nike landing page features like image click intraction & fully responsive across all devices. ",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: nikeclone,
    links: [
      {
        name: "website",
        href: "https://nike-clone-seven-rho.vercel.app/",
        icon: React.createElement(FaEarthAsia),
      },
      {
        name: "source",
        href: "https://nike-clone-seven-rho.vercel.app/",
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
  {
    title: "Linkdify",
    description:
      "Linkdify is a tool that convet your linkedin profile into beautiful PDF. (work on it)",
    tags: ["React", "Next.js", "jsPDF", "Tailwind", "Figma"],
    imageUrl: linkdify,
    links: [
      // {
      //   name: "website",
      //   href: "https://prompt-x-psi.vercel.app/",
      //   icon: React.createElement(FaEarthAsia),
      // },
      // {
      //   name: "source",
      //   href: "https://github.com/himanshu-tyd/prompt-x",
      //   icon: React.createElement(FaGithub),
      // },
    ],
  },
] as const;
