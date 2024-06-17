import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import ecommerce from "../..//public/e-commerce.png";
import tianblog from "../..//public/tian-blog.png";
import githubProfile from "../..//public/githubprofile.png";
import weatherForecast from "../..//public/weatherForecast.png";
import netflix from "../..//public/netflix.png";
import rmtdevImg from "../../public/rmtdev.png";
import trainingClub from "../..//public/trainingClub.png";

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
    title: "Freelance Front-End Developer",
    description:
      "I worked as a front-end developer in freelance for 6 months. Made a lot of interesting projects",
    icon: React.createElement(CgWorkAlt),
    date: "October 2022 — March 2023",
  },
  {
    title: "Completed a course in js - React",
    description:
      "I Completed course after 2 months of studying. Started doing pet projects ",
    icon: React.createElement(LuGraduationCap),
    date: "2023 summer",
  },
  {
    title: "Training Club",
    description:
      "As a frontend developer at Training Club, I help craft a compelling fitness web app driving users toward their wellness objectives. Working with a vibrant team, we blend sleek design and intuitive interfaces, elevating the user experience",
    icon: React.createElement(FaReact),
    date: "October 2023 - May 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Tian blog",
    description:
      "A blog website with modern design which is fully responsive and has smooth animations.",
    tags: ["Next13.js", "TypeScript", "Tailwind CSS"],
    imageUrl: tianblog,
  },
  {
    title: "Coffee Shop",
    description:
      "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. ",
    tags: ["React", "Styled components", "React Transition"],
    imageUrl: rmtdevImg,
  },
  {
    title: "e-Commerce",
    description:
      " A modern e-commerce website with a clean design and smooth animations.",
    tags: [
      "Next13.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand.js",
      "Framer Motion",
    ],
    imageUrl: ecommerce,
  },
  {
    title: "Github Profile",
    description:
      "A modern Github profile page where you can see your repositories and profile information in a beautiful way.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: githubProfile,
  },
  {
    title: "Weather Forecast",
    description:
      "A weather forecast website that shows the weather of the current location and the next 7 to 14 days.",
    tags: ["React", "TypeScript", "Zustand.js", "CSS", "ky (fetch)"],
    imageUrl: weatherForecast,
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix clone website with a fully functional movie trailer and a beautiful design.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Zustand.js",
      "Tailwind",
      "Framer Motion",
      "ky (fetch)",
      "Shadc/ui",
    ],
    imageUrl: netflix,
  },
  {
    title: "Training Club",
    description:
      "A calendar is a powerful tool for organizing your schedule, events, and tasks.",
    tags: ["React", "TypeScript", "React Querry", "ky (fetch)"],
    imageUrl: trainingClub,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "MUI",
  "Styled-components",
  "Shadcn/ui",
  "Git",
  "Tailwind",
  "Redux",
  "React Query",
  "Zustand",
  "Framer Motion",
] as const;
