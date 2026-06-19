"use client";

import { motion } from "framer-motion";
import { FaCode, FaCodeBranch } from "react-icons/fa";

const achievements = [
  {
    title: "300+ Coding Problems",
    description:
      "Solved over 300 coding problems across multiple platforms demonstrating strong problem-solving skills.",
    stat: "300+",
    statLabel: "Problems",
    icon: <FaCode />,
    color: "text-blue-400",
    glow: "bg-blue-500/30",
    link: "https://codolio.com/profile/Darshil_Savaliya",
  },
  {
    title: "GSSoC Contributor",
    description:
      "Active open-source contributor at GirlScript Summer of Code 2026, ranked #482 out of 43,586 participants.",
    stat: "4,844",
    statLabel: "Points · Rank #482",
    icon: <FaCodeBranch />,
    color: "text-purple-400",
    glow: "bg-purple-500/30",
    link: "https://gssoc.girlscript.org/profile/c5a4fde1-484e-4055-90da-a8854b981106",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 text-white px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[#050510]" />

      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-purple-600 opacity-10 blur-[180px] rounded-full"></div>

      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-cyan-500 opacity-10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Achievements{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            & Recognition
          </span>
        </h2>

        <p className="text-gray-400 text-center mb-12 md:mb-16 text-sm sm:text-base">
          Milestones and certifications that mark my journey in tech
        </p>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {achievements.map((item, index) => {
            const Wrapper = item.link ? motion.a : motion.div;
            const linkProps = item.link
              ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Wrapper
                key={index}
                {...linkProps}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-900/40 backdrop-blur p-6 sm:p-8 rounded-xl border border-gray-800 hover:border-purple-400 transition block"
              >
                {/* Icon */}

                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-5 sm:mb-6">
                  <div
                    className={`absolute inset-0 rounded-lg blur-xl ${item.glow}`}
                  />

                  <div className={`relative text-xl sm:text-2xl ${item.color}`}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}

                <h3 className="text-base sm:text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 text-sm mb-6">{item.description}</p>

                <div className="border-t border-gray-800 pt-4 flex items-center gap-2">
                  <span
                    className={`text-base sm:text-lg font-semibold ${item.color}`}
                  >
                    {item.stat}
                  </span>

                  <span className="text-gray-400 text-sm">{item.statLabel}</span>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* Bottom badges */}

        <div className="flex justify-center mt-12 md:mt-16">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-6 sm:px-8 py-4 rounded-xl border border-gray-800 bg-gray-900/40 text-gray-300 text-sm">
            <span>🏆 Continuous learner</span>

            <span>⚡ Results-driven</span>

            <span>🎯 Excellence-focused</span>
          </div>
        </div>
      </div>
    </section>
  );
}