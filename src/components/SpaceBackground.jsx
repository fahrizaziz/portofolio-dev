/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#030412]">
      {/* Cosmic Nebula Glow Effects */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-900/25 rounded-full blur-[130px]" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[120px]" />

      {/* Starry Night Pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 150px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 300px 250px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 450px 120px, #c084fc, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 600px 350px, #ffffff, rgba(0,0,0,0)), radial-gradient(2.5px 2.5px at 750px 90px, #38bdf8, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 900px 420px, #ffffff, rgba(0,0,0,0))",
          backgroundSize: "700px 500px",
        }}
      />

      {/* Diagonal Shooting Star Light Streaks */}
      <div className="absolute top-16 left-1/5 w-[350px] h-[2px] bg-gradient-to-r from-cyan-400 via-cyan-200 to-transparent -rotate-[35deg] opacity-70 blur-[0.5px]" />
      <div className="absolute top-1/3 right-1/3 w-[480px] h-[2px] bg-gradient-to-r from-purple-400 via-indigo-300 to-transparent -rotate-[35deg] opacity-65 blur-[0.5px]" />
      <div className="absolute bottom-1/3 left-12 w-[380px] h-[2px] bg-gradient-to-r from-blue-400 via-purple-300 to-transparent -rotate-[35deg] opacity-55 blur-[0.5px]" />
      <div className="absolute top-1/2 right-12 w-[420px] h-[2px] bg-gradient-to-r from-purple-500 via-purple-300 to-transparent -rotate-[35deg] opacity-70 blur-[0.5px]" />

      {/* Floating Blue Planet Orb (Top-Center) */}
      <motion.div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-900 shadow-[0_0_35px_rgba(56,189,248,0.7)] relative overflow-hidden border border-cyan-200/40">
          <div className="absolute top-2 left-3 w-4 h-4 rounded-full bg-blue-950/40 border border-cyan-300/30" />
          <div className="absolute bottom-3 right-4 w-6 h-6 rounded-full bg-indigo-950/40 border border-cyan-300/30" />
          <div className="absolute top-6 right-2 w-2.5 h-2.5 rounded-full bg-blue-900/40" />
        </div>
      </motion.div>
    </div>
  );
};

export default SpaceBackground;
