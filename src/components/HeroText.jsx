/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import TypewriterText from "./TypewriterText";
import { getExperienceDuration } from "../constants";

const HeroText = () => {
  const roles = [
    "Fahriz Aziz",
    "Fullstack Developer",
    "Mobile Specialist",
    "Backend & API Engineer",
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="z-20 text-left max-w-3xl pt-24 sm:pt-32 pb-12">
      {/* Tagline Pill */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="inline-block"
      >
        <div className="inline-flex items-center px-5 py-3 mb-6 text-lg sm:text-xl font-bold tracking-wide text-white border border-purple-500/40 bg-gradient-to-r from-purple-900/70 via-indigo-900/60 to-purple-950/70 rounded-sm shadow-xl backdrop-blur-md">
          Welcome to my Portfolio
        </div>
      </motion.div>

      {/* Main Heading with Typewriter */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        Hi, I'm{" "}
        <TypewriterText toRotate={roles} period={2000} />
      </motion.h1>

      {/* Paragraph Description */}
      <motion.p
        className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        With {getExperienceDuration()} of hands-on experience, I specialize in developing high-performance mobile applications and scalable API / backend systems. My goal is to build secure, reliable, and modern solutions that solve real business needs and deliver excellent user experiences.
      </motion.p>

      {/* Let's Connect Link */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-3 text-lg sm:text-xl font-bold text-white hover:text-purple-300 transition-colors group cursor-pointer"
        >
          <span>Let's Connect</span>
          <span className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-white group-hover:border-purple-300 group-hover:bg-purple-500/20 transition-all">
            <svg
              className="w-4 h-4 fill-current transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </span>
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
