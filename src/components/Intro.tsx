"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import avatar from "../../public/avatar.jpg";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={avatar}
              alt="Chezee"
              quality={95}
              priority={true}
              className=" h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              stiffness: 125,
              delay: 0.1,
            }}
            className="absolute text-4xl bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
      >
        {" "}
        <span className="font-bold">Hello, I'm Vadym.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/60"
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition " />
        </a>
        <a
          target="_blank"
          href="#"
          className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full focus:scale-110 hover:text-gray-950 hover:scale-[1.15] active:scale-[1.15] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          target="_blank"
          href="https://github.com/chezee4"
          className="bg-white text-[1.35rem] p-4 flex items-center text-gray-700 gap-2 rounded-full focus:scale-110 hover:text-gray-950 hover:scale-[1.15] active:scale-[1.15] transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
