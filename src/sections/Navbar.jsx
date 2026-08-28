/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ThemeToggle from "../components/ThemeToggle";

function Navigation() {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
      <li>
        <a
          className="text-neutral-300 hover:text-white transition-colors text-base font-medium"
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="text-neutral-300 hover:text-white transition-colors text-base font-medium"
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className="text-neutral-300 hover:text-white transition-colors text-base font-medium"
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className="text-neutral-300 hover:text-white transition-colors text-base font-medium"
          href="#experience"
        >
          Experience
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030412]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1536px] px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Brand Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Fahriz Aziz Logo"
              className="h-16 sm:h-20 lg:h-22 w-auto object-contain brightness-0 invert hover:opacity-90 transition-all drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
          </a>

          {/* Desktop Navigation & Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <Navigation />

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/fahriz-aziz-a4791619a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-white/5 hover:bg-white transition-all group"
                title="LinkedIn"
              >
                <img
                  src="/assets/socials/linkedIn.svg"
                  alt="LinkedIn"
                  className="w-4 h-4 group-hover:invert transition-all"
                />
              </a>
              <a
                href="https://github.com/fahrizaziz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-white/5 hover:bg-white transition-all group"
                title="GitHub"
              >
                <img
                  src="/assets/socials/github.svg"
                  alt="GitHub"
                  className="w-4 h-4 group-hover:invert transition-all"
                />
              </a>
              <a
                href="https://wa.me/6281212271964"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-white/5 hover:bg-white transition-all group"
                title="WhatsApp"
              >
                <img
                  src="/assets/socials/whatsApp.svg"
                  alt="WhatsApp"
                  className="w-4 h-4 group-hover:invert transition-all"
                />
              </a>
              <ThemeToggle />
            </div>

            {/* Let's Connect Button */}
            <a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-2.5 transition-all duration-300 text-base tracking-wide"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-white focus:outline-none lg:hidden"
            aria-label="Toggle Navigation"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-7 h-7"
              alt="menu toggle"
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <motion.div
          className="lg:hidden bg-[#06091f] px-6 py-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-6 items-center">
            <Navigation />
            <div className="flex items-center gap-4 my-2">
              <a
                href="https://www.linkedin.com/in/fahriz-aziz-a4791619a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-white/5"
              >
                <img
                  src="/assets/socials/linkedIn.svg"
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://github.com/fahrizaziz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-white/5"
              >
                <img
                  src="/assets/socials/github.svg"
                  alt="GitHub"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://wa.me/6281212271964"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-white/5"
              >
                <img
                  src="/assets/socials/whatsApp.svg"
                  alt="WhatsApp"
                  className="w-4 h-4"
                />
              </a>
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="border border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-2.5 transition-all w-full text-center"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
