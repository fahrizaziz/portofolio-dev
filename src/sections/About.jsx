/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "motion/react";

const skillsData = [
  { label: "Mobile Development", percentage: 95, detail: "Flutter" },
  { label: "Backend & API", percentage: 90, detail: "NestJS & Laravel" },
  { label: "Databases", percentage: 88, detail: "MySQL & MSSQL" },
  { label: "DevOps & Container", percentage: 85, detail: "Docker" },
  { label: "Web Development", percentage: 90, detail: "React & Next.js" },
  { label: "Workflow Automation", percentage: 85, detail: "n8n" },
];

const CircularSkill = ({ percentage, label, detail }) => {
  const radius = 52;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-2 group">
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center mb-5">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <defs>
            <linearGradient id={`grad-${label.replace(/[^a-zA-Z0-9]/g, "")}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d8b4fe" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <circle
            cx="60"
            cy="60"
            r={normalizedRadius}
            stroke="#232438"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx="60"
            cy="60"
            r={normalizedRadius}
            stroke={`url(#grad-${label.replace(/[^a-zA-Z0-9]/g, "")})`}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {percentage}%
        </span>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide text-center group-hover:text-purple-300 transition-colors">
        {label}
      </h3>
      {detail && (
        <span className="text-sm font-medium text-neutral-400 mt-1">
          {detail}
        </span>
      )}
    </div>
  );
};

const About = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = skillsData.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section id="skills" className="c-space section-spacing relative py-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#151521]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(168,85,247,0.15)] text-center overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Skills
          </h2>

          {/* Subtitle / Description */}
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16 font-normal">
            Experienced in a modern and efficient tech stack for building
            scalable backend systems and high-quality mobile applications. My
            primary tools include Flutter for mobile, NestJS & Laravel for
            backend development, and Docker for deployment. Databases: MySQL &
            MSSQL.
          </p>

          {/* Skills Carousel */}
          <div className="relative flex items-center justify-center">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:left-2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/70 border border-white/20 hover:bg-purple-600 hover:border-purple-400 text-white transition-all shadow-lg cursor-pointer"
              aria-label="Previous Skill"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            {/* Carousel Items Window */}
            <div className="w-full max-w-4xl overflow-hidden px-8 sm:px-14">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${startIndex * (100 / 3)}%)`,
                }}
              >
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  >
                    <CircularSkill
                      percentage={skill.percentage}
                      label={skill.label}
                      detail={skill.detail}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 sm:right-2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-black/70 border border-white/20 hover:bg-purple-600 hover:border-purple-400 text-white transition-all shadow-lg cursor-pointer"
              aria-label="Next Skill"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
