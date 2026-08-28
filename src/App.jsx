import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <div className="w-full max-w-[1536px] mx-auto min-h-screen bg-[#030412] text-white selection:bg-purple-500 selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;