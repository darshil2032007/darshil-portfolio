"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBrain, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const projects = [
  {
    title: "Theft Detection System",
    short:
      "A computer vision system that detects suspicious activities and potential theft in real-time using AI.",

    full: "The Theft Detection System uses computer vision and deep learning techniques to monitor video streams and identify suspicious behaviors such as unauthorized access or theft. The system analyzes live footage, detects anomalies, and can trigger alerts to improve security in stores, offices, or public spaces.",

    tech: [
      "Python",
      "OpenCV",
      "Deep Learning",
      "Computer Vision",
      "Machine Learning",
    ],

    github: "https://github.com/darshil2032007/theft-detection-system",
    demo: "https://theft-detection-system.streamlit.app/",
  },

  {
    title: "Smartphone Market Analysis",
    short:
      "A data analysis project exploring trends in the smartphone market using data science techniques.",

    full: "This project analyzes smartphone market data to identify trends in pricing, specifications, brand performance, and consumer preferences. Using Python data science libraries, the project performs data cleaning, visualization, and exploratory data analysis to uncover insights about market competition and product positioning.",

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Analysis",
    ],

    github: "https://github.com/darshil2032007/smartphone-market-analysis",
    demo: "#",
  },

  {
    title: "Student Performance Analysis",
    short:
      "A machine learning model that analyzes student data to predict academic performance.",

    full: "This project uses machine learning algorithms to analyze factors that influence student academic performance such as study time, attendance, and previous grades. The system predicts student outcomes and helps identify patterns that can support better educational strategies and personalized learning approaches.",

    tech: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "Data Visualization",
    ],

    github: "https://github.com/darshil2032007/student-performance-analysis",
    demo: "#",
  },

  {
    title: "Trip Planner",
    short:
      "A smart travel planning application that helps users organize trips and explore destinations.",

    full: "The Trip Planner application helps users plan their travel by recommending destinations, organizing itineraries, and managing travel details such as locations, dates, and activities. The system is designed to simplify trip organization and provide a smooth travel planning experience.",

    tech: ["Python", "Web Development", "JavaScript", "APIs", "Travel Data"],

    github: "https://github.com/darshil2032007/trip-planner",
    demo: "#",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12 text-white overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[#050510]" />

      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-purple-600 opacity-10 blur-[180px] rounded-full"></div>

      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-cyan-500 opacity-10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>

        <p className="text-gray-400 text-center mb-12 md:mb-16 text-sm sm:text-base">
          Innovative AI solutions that push the boundaries of what's possible
        </p>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setSelected(project)}
              className="cursor-pointer p-6 sm:p-8 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur
              hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition"
            >
              {/* Icon */}

              <div className="relative w-12 h-12 flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-purple-500 blur-xl opacity-40 rounded-lg"></div>

                <div className="relative text-purple-400 text-xl">
                  <FaBrain />
                </div>
              </div>

              {/* Title */}

              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* Short Description */}

              <p className="text-gray-400 text-sm sm:text-base mb-5">
                {project.short}
              </p>

              {/* Tech Tags */}

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-md text-gray-300"
                  >
                    {tech}
                  </span>
                ))}

                {project.tech.length > 4 && (
                  <span className="text-xs bg-gray-800 px-3 py-1 rounded-md text-gray-300">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}

      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-[#0b0b14] border border-purple-500/30 rounded-xl max-w-3xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto">
            {/* Close */}

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-white text-2xl"
            >
              <MdClose />
            </button>

            {/* Title */}

            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {selected.title}
            </h3>

            {/* Full Description */}

            <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
              {selected.full}
            </p>

            {/* Tech Stack */}

            <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>

            <div className="flex flex-wrap gap-3 mb-8">
              {selected.tech.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">
              {/* GitHub */}

              <a
                href={selected.github}
                target="_blank"
                className="flex items-center gap-2 px-5 sm:px-6 py-2 border border-gray-700 rounded-lg hover:border-purple-400 transition"
              >
                <FaGithub />
                GitHub
              </a>

              {/* Live Demo */}

              {selected.demo && selected.demo !== "#" ? (
                <a
                  href={selected.demo}
                  target="_blank"
                  className="flex items-center gap-2 px-5 sm:px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              ) : (
                <div className="flex items-center gap-2 px-5 sm:px-6 py-2 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed">
                  <FaExternalLinkAlt />
                  No Live Demo
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
