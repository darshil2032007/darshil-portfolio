"use client";

import { FaGraduationCap, FaCode, FaPython, FaGitAlt } from "react-icons/fa";
import { BsCpu, BsCpuFill, BsChatDots } from "react-icons/bs";
import {
  SiFlask,
  SiLangchain,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiNextdotjs,
  SiJupyter,
  SiGooglecolab,
  SiOpencv,
} from "react-icons/si";
import { FiDatabase } from "react-icons/fi";

export default function About() {
  const skills = [
    // AI/ML Core — purple
    { name: "Python", color: "purple", icon: <FaPython /> },
    { name: "Scikit-Learn", color: "purple", icon: <SiScikitlearn /> },
    { name: "Groq AI", color: "purple", icon: <BsCpuFill /> },
    { name: "Jupyter", color: "purple", icon: <SiJupyter /> },

    // GenAI & LLM — cyan
    { name: "LangChain", color: "cyan", icon: <SiLangchain /> },
    { name: "RAG", color: "cyan", icon: <FiDatabase /> },
    { name: "Prompt Engineering", color: "cyan", icon: <BsChatDots /> },
    { name: "OpenCV", color: "cyan", icon: <SiOpencv /> },

    // Data Science — red
    { name: "Pandas", color: "red", icon: <SiPandas /> },
    { name: "NumPy", color: "red", icon: <SiNumpy /> },
    { name: "Matplotlib", color: "red", icon: <SiPlotly /> },
    { name: "SQL", color: "red", icon: <FiDatabase /> },

    // Web & Tools — gray
    { name: "Flask", color: "gray", icon: <SiFlask /> },
    { name: "Next.js", color: "gray", icon: <SiNextdotjs /> },
    { name: "Git", color: "gray", icon: <FaGitAlt /> },
    { name: "Google Colab", color: "gray", icon: <SiGooglecolab /> },
  ];

  const colors = {
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    gray: "bg-gray-700/20 text-gray-300 border-gray-600",
  };

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12 text-white overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[#050510]" />

      <div className="absolute top-[20%] left-[10%] w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] bg-purple-600 opacity-10 blur-[160px] rounded-full"></div>

      <div className="absolute top-[40%] right-[10%] w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] bg-cyan-500 opacity-10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Me
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Passionate about building intelligent systems that solve real-world
            problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* LEFT CARDS */}

          <div className="space-y-6">
            {/* Education */}

            <div className="p-5 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur">
              <div className="flex items-center gap-4 mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 blur-xl opacity-30 rounded-full"></div>

                  <div className="relative p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                    <FaGraduationCap />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-semibold">
                  Education
                </h3>
              </div>

              <p className="text-gray-400 text-sm sm:text-base">
                B.Tech in Artificial Intelligence & Machine Learning
              </p>

              <p className="text-gray-400 text-sm sm:text-base">
                L.D. College of Engineering (LDCE), Ahmedabad
              </p>

              <p className="text-gray-400 text-sm sm:text-base">
                2024–2028 | CGPA: 9.45
              </p>
            </div>

            {/* What I Do */}

            <div className="p-5 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur">
              <div className="flex items-center gap-4 mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-30 rounded-full"></div>

                  <div className="relative p-3 bg-cyan-500/10 text-cyan-400 rounded-lg">
                    <BsCpu />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-semibold">
                  What I Do
                </h3>
              </div>

              <p className="text-gray-400 text-sm sm:text-base">
                I specialize in building Generative AI applications, RAG
                pipelines, and computer vision systems. As a GSSoC open-source
                contributor, I've integrated Groq-powered AI and ML features
                into real-world full-stack projects.
              </p>
            </div>

            {/* My Approach */}

            <div className="p-5 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur">
              <div className="flex items-center gap-4 mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-400 blur-xl opacity-30 rounded-full"></div>

                  <div className="relative p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                    <FaCode />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-semibold">
                  My Approach
                </h3>
              </div>

              <p className="text-gray-400 text-sm sm:text-base">
                I believe in building production-ready AI systems with clean,
                scalable code — continuously exploring LLMs, vector databases,
                and emerging GenAI tools to solve meaningful real-world
                problems.
              </p>
            </div>
          </div>

          {/* RIGHT SKILLS */}

          <div className="p-5 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur">
            <h3 className="text-base sm:text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="relative">
                <span className="absolute inset-0 bg-purple-500 blur-xl opacity-30 rounded-full"></span>

                <span className="relative text-purple-400">⚙</span>
              </span>
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg border transition
                  ${colors[skill.color as keyof typeof colors]}`}
                >
                  <span className="text-base sm:text-lg">{skill.icon}</span>

                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
