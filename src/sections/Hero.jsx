import React from "react";
import HeroText from "../components/HeroText";
import SpaceBackground from "../components/SpaceBackground";
import HeroVisual from "../components/HeroVisual";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Space Atmosphere & Background */}
      <SpaceBackground />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-80px)]">
        {/* Left Column - Text Details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <HeroText />
        </div>

        {/* Right Column - 3D Astronaut & Space Graphics */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
