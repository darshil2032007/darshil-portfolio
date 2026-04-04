"use client";

import { FaBrain, FaDatabase } from "react-icons/fa";
import { BsCpu } from "react-icons/bs";
import { TbStack2 } from "react-icons/tb";
import { SiFastapi } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FiBarChart2 } from "react-icons/fi";

export default function Skills() {

  const skills = [
    { name: "GenAI", icon: <FaBrain />, color: "from-purple-500 to-purple-400" },
    { name: "Machine Learning", icon: <BsCpu />, color: "from-blue-500 to-cyan-400" },
    { name: "NLP", icon: <TbStack2 />, color: "from-pink-500 to-red-400" },
    { name: "RAG", icon: <FaDatabase />, color: "from-green-500 to-emerald-400" },
    { name: "Vector DB", icon: <FaDatabase />, color: "from-orange-500 to-yellow-400" },
    { name: "FastAPI", icon: <SiFastapi />, color: "from-cyan-500 to-blue-400" },
    { name: "AI Systems", icon: <GiArtificialIntelligence />, color: "from-purple-500 to-indigo-400" },
    { name: "Data Science", icon: <FiBarChart2 />, color: "from-cyan-500 to-blue-400" },
    { name: "Deep Learning", icon: <FaBrain />, color: "from-pink-500 to-purple-500" },
  ];

  return (

    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12 text-white overflow-hidden"
    >

      {/* Background */}

      <div className="absolute inset-0 bg-[#050510]" />

      <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-600 opacity-10 blur-[180px] rounded-full"></div>

      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-cyan-500 opacity-10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Title */}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Core{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Expertise
          </span>
        </h2>

        <p className="text-gray-400 mb-12 md:mb-16 text-sm sm:text-base">
          Specialized skills in cutting-edge AI technologies
        </p>

        {/* Grid */}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 justify-items-center">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="group relative flex flex-col items-center justify-center"
            >

              {/* Glow */}

              <div
                className={`absolute w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-r ${skill.color}
                blur-3xl opacity-30 group-hover:opacity-60 transition`}
              ></div>

              {/* Circle */}

              <div
                className={`relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center
                bg-gradient-to-r ${skill.color}
                shadow-xl transform transition group-hover:scale-110`}
              >

                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">
                  {skill.icon}
                </div>

                <span className="text-white font-semibold text-xs sm:text-sm text-center px-2">
                  {skill.name}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}