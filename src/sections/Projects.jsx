/* eslint-disable no-unused-vars */
import { useState } from "react";
import { myProjects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "motion/react";

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "mobile", label: "Mobile & Web Apps" },
  { id: "backend", label: "Backend & APIs" },
  { id: "automation", label: "AI & Automation" },
];

const getProjectCategory = (project) => {
  const title = project.title.toLowerCase();

  if (
    title.includes("ocr") ||
    title.includes("wellness") ||
    title.includes("automation")
  ) {
    return "automation";
  }
  if (
    title.includes("api") ||
    title.includes("snap bi") ||
    title.includes("core api")
  ) {
    return "backend";
  }
  return "mobile";
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = myProjects.filter((project) => {
    if (activeTab === "all") return true;
    return getProjectCategory(project) === activeTab;
  });

  return (
    <section id="projects" className="c-space section-spacing relative py-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            My Selected Projects
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            A showcase of my recent work across mobile applications, backend microservices, API integrations, and AI workflow automations.
          </p>
        </div>

        {/* Connected Tab Bar matching screenshot */}
        <div className="flex items-center justify-center mb-14">
          <div className="w-full max-w-3xl bg-[#12131F]/90 border border-white/20 rounded-full flex overflow-hidden shadow-2xl backdrop-blur-xl">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 text-center font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                    index > 0 ? "border-l border-white/20" : ""
                  } ${
                    isActive
                      ? "bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white shadow-lg"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
