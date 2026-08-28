/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Astronaut } from "./Astronaut";
import Loader from "./Loader";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const HeroVisual = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center pointer-events-auto">
      {/* Big Purple Planet Background Graphic */}
      <motion.div
        className="absolute right-0 sm:right-6 top-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Purple Planet Core */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-indigo-800 to-purple-950 shadow-[0_0_90px_rgba(168,85,247,0.45)] border border-purple-400/30 relative overflow-hidden">
          {/* Planet Surface Craters */}
          <div className="absolute top-10 left-14 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-purple-950/60 border border-purple-400/20" />
          <div className="absolute bottom-16 right-12 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-indigo-950/70 border border-purple-400/20" />
          <div className="absolute top-1/3 right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-900/50" />
          <div className="absolute bottom-10 left-1/3 w-14 h-14 rounded-full bg-indigo-900/50" />
          {/* Atmospheric Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/10 to-purple-300/30 rounded-full" />
        </div>
      </motion.div>

      {/* Mini Rocket flying near upper right of planet */}
      <motion.div
        className="absolute top-6 sm:top-10 right-2 sm:right-10 z-20"
        animate={{
          y: [0, -14, 0],
          x: [0, 6, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-12 sm:w-16 h-12 sm:h-16">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-full h-full drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]"
          >
            <path
              d="M32 4C32 4 48 16 48 36C48 44 42 48 42 48L32 44L22 48C22 48 16 44 16 36C16 16 32 4 32 4Z"
              fill="url(#rocket_body)"
            />
            <path
              d="M32 4C28 16 26 28 26 36C26 42 32 44 32 44C32 44 38 42 38 36C38 28 36 16 32 4Z"
              fill="#FFFFFF"
              opacity="0.3"
            />
            <circle
              cx="32"
              cy="24"
              r="6"
              fill="#030412"
              stroke="#38BDF8"
              strokeWidth="2"
            />
            <path d="M16 36L6 44L14 48L20 44" fill="#E11D48" />
            <path d="M48 36L58 44L50 48L44 44" fill="#E11D48" />
            <path d="M26 46L32 60L38 46" fill="#F97316" />
            <path d="M28 46L32 54L36 46" fill="#FACC15" />
            <defs>
              <linearGradient
                id="rocket_body"
                x1="16"
                y1="4"
                x2="48"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F43F5E" />
                <stop offset="1" stopColor="#881337" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* 3D Canvas with Astronaut */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
          <ambientLight intensity={1.8} />
          <directionalLight position={[5, 5, 5]} intensity={2.5} />
          <Suspense fallback={<Loader />}>
            <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
              <Astronaut
                scale={isMobile ? 0.26 : 0.36}
                position={isMobile ? [0.2, -0.6, 0] : [0.6, -0.7, 0]}
              />
            </Float>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default HeroVisual;
