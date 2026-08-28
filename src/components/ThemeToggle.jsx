/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, resolvedTheme, changeTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-white/5 hover:bg-white/15 transition-all text-white cursor-pointer"
        title={`Theme: ${theme}`}
        aria-label="Toggle theme"
      >
        {resolvedTheme === "dark" ? (
          /* Moon Icon */
          <svg className="w-5 h-5 fill-current text-purple-300" viewBox="0 0 24 24">
            <path d="M12.3 2a10 10 0 0 0 9.7 11.5 9.9 9.9 0 1 1-11.5-9.7z" />
          </svg>
        ) : (
          /* Sun Icon */
          <svg className="w-5 h-5 fill-current text-amber-400" viewBox="0 0 24 24">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0zm-12.37 12.37l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0z" />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-[#151521] border border-white/20 rounded-2xl shadow-2xl p-1.5 z-50 backdrop-blur-xl">
          <button
            onClick={() => {
              changeTheme("dark");
              setDropdownOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              theme === "dark"
                ? "bg-purple-600 text-white"
                : "text-neutral-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <svg className="w-4 h-4 fill-current text-purple-300" viewBox="0 0 24 24">
              <path d="M12.3 2a10 10 0 0 0 9.7 11.5 9.9 9.9 0 1 1-11.5-9.7z" />
            </svg>
            Dark Mode
          </button>

          <button
            onClick={() => {
              changeTheme("light");
              setDropdownOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer mt-1 ${
              theme === "light"
                ? "bg-purple-600 text-white"
                : "text-neutral-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <svg className="w-4 h-4 fill-current text-amber-400" viewBox="0 0 24 24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z" />
            </svg>
            Light Mode
          </button>

          <button
            onClick={() => {
              changeTheme("system");
              setDropdownOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer mt-1 ${
              theme === "system"
                ? "bg-purple-600 text-white"
                : "text-neutral-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <svg className="w-4 h-4 fill-current text-neutral-300" viewBox="0 0 24 24">
              <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6l-2 3v1h8v-1l-2-3h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10z" />
            </svg>
            System OS
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
