"use client";

import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/darshil-savaliya-d20032007/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/darshil2032007",
    label: "GitHub",
  },
  {
    icon: <SiLeetcode />,
    href: "https://leetcode.com/u/Darshil_Savaliya/",
    label: "LeetCode",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden pt-24 pb-8">
      {/* Background */}
      <div className="absolute inset-0 bg-[#04040d]" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-600/20 blur-[180px]" />
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10" />

          <div className="relative px-8 py-14 md:px-16 md:py-20 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
              Let's Build Together
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Transforming Ideas Into
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-400">
              AI Engineer • Machine Learning Enthusiast • Open Source
              Contributor
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#contact"
                className="rounded-full border border-purple-500/40 bg-purple-500/20 px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-purple-500/30"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-3">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Darshil Savaliya
            </h3>

            <p className="mt-3 text-gray-400">
              AI & Machine Learning Engineer passionate about building
              intelligent systems and impactful open-source projects.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Open for Collaborations
            </div>
          </div>

          {/* Center */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Quick Navigation
            </h4>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 transition hover:text-purple-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
              Connect With Me
            </h4>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/20 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="mt-6 text-gray-500">
              Ahmedabad, Gujarat, India
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Darshil Savaliya. All rights reserved.
          </p>

          <p>Built with Next.js, TypeScript & Tailwind CSS</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 transition hover:text-purple-400"
          >
            Back to Top
            <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}