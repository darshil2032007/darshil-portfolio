"use client";

import { TypeAnimation } from "react-type-animation";
import Magnetic from "./Magnetic";
import Image from "next/image";
import { FaRocket, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsRobot } from "react-icons/bs";

export default function Hero() {
  const openAIChat = () => {
    const button = document.querySelector("#ai-chat-button") as HTMLElement;
    if (button) button.click();
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 px-6 sm:px-8 lg:px-12 pb-20 md:pb-0 text-white overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#050510]" />

      {/* Purple glow */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-600 opacity-10 blur-[160px] rounded-full"></div>

      {/* Cyan glow */}
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-cyan-500 opacity-10 blur-[160px] rounded-full"></div>

      {/* Bottom glow */}
      <div className="absolute bottom-[-120px] left-[40%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-500 opacity-10 blur-[200px] rounded-full"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* Availability badge */}
          <div className="inline-block mb-6 px-4 py-2 text-xs sm:text-sm rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 backdrop-blur">
            ✨ Available for opportunities
          </div>

          <p className="text-gray-400 mb-2 text-sm sm:text-base">Hello, I'm</p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white">Darshil </span>
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 text-transparent bg-clip-text">
              Savaliya
            </span>
          </h1>

          {/* Animated role */}
          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-300 mb-6">
            <TypeAnimation
              sequence={[
                "Building AI-Powered Applications",
                2000,
                "Exploring Generative AI & RAG",
                2000,
                "Data Science Enthusiast",
                2000,
                "Machine Learning Engineer",
                2000,
                "Open Source Contributor",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
            AI/ML undergraduate passionate about Generative AI, RAG systems, and
            Computer Vision. Building intelligent applications and contributing
            to open source through GSSoC.
          </p>

          {/* Main buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
            <Magnetic>
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 transition shadow-lg shadow-purple-500/20"
              >
                <FaRocket />
                View Projects
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-700 hover:border-purple-400 transition"
              >
                <FaDownload />
                Download Resume
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-cyan-500 hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/20"
              >
                <MdEmail />
                Contact Me
              </a>
            </Magnetic>
          </div>

          {/* AI Button */}
          <div className="flex gap-4 flex-wrap">
            <Magnetic>
              <button
                onClick={openAIChat}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-700 rounded-lg hover:border-purple-400 transition"
              >
                <BsRobot />
                Ask AI About Me
              </button>
            </Magnetic>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center mt-16 md:mt-0">
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
            {/* Glow */}
            <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>

            {/* Rotating gradient ring */}
            <div
              className="absolute w-[105%] h-[105%] rounded-full border border-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-spin-slow"
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                padding: "3px",
              }}
            ></div>

            {/* Profile image */}
            <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border border-purple-500/40 shadow-2xl">
              <Image
                src="/hero-avatar.jpg"
                alt="Darshil Avatar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Smooth blend to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-b from-transparent to-[#050510]"></div>
    </section>
  );
}
