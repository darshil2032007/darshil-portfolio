"use client";

import { useState, useEffect } from "react";
import { FaStar, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  // Scroll spy
  useEffect(() => {

    const handleScroll = () => {

      const sections = links.map(link =>
        document.getElementById(link.id)
      );

      let current = "about";

      sections.forEach((section) => {

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }

      });

      setActive(current);

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-gray-800 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-purple-400 font-bold text-xl">
          Darshil.dev
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (

            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`relative transition ${
                active === link.id
                  ? "text-purple-400"
                  : "text-gray-300 hover:text-purple-400"
              }`}
            >

              {link.name}

              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-purple-500 transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />

            </a>

          ))}

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="ml-4 flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 transition text-white font-medium shadow-lg shadow-purple-500/20"
          >
            <FaStar className="text-sm" />
            Hire Me
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-gray-800">

          <div className="flex flex-col items-center gap-6 py-6">

            {links.map((link) => (

              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.id);
                  setMenuOpen(false);
                }}
                className={`text-lg transition ${
                  active === link.id
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {link.name}
              </a>

            ))}

            {/* Hire Me */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium"
            >
              <FaStar />
              Hire Me
            </a>

          </div>

        </div>

      )}

    </nav>

  );
}