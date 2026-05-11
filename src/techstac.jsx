"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiCanva,
} from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";

const techStack = [
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  SiExpress,
  SiMongodb,
  SiMysql,
  FaGitAlt,
  FaGithub,
  SiTailwindcss,
  SiCanva, FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  SiExpress,
  SiMongodb,
  SiMysql,
  FaGitAlt,
  FaGithub,
  SiTailwindcss,
  SiCanva,
];

export default function TechStack() {
  return (
    <section className="w-full text-white py-12 overflow-hidden relative">
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-4xl font-bold">My Tech Stack</h2>
  </div>

  {/* Infinite loop container */}
  <div className="relative w-full overflow-hidden rounded-full" >
    <motion.div
      className="flex gap-12 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      }}
    >
      {[...techStack, ...techStack].map((Icon, index) => (
        <div
          key={index}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Icon className="text-5xl sm:text-6xl" />
        </div>
      ))}
    </motion.div>

    {/* Original fade masks with rounded edges, clipped inside container */}
    <div className="pointer-events-none absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-black/50 to-transparent rounded-full overflow-hidden" />
    <div className="pointer-events-none absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-black/50 to-transparent rounded-l-xl" />
  </div>
</section>

  );
}
