"use client";

import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2024 – Present",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institute: "LD College of Engineering",
    points: [
      "Focused on Machine Learning, Data Science and AI systems",
      "Built ML and data analysis projects",
      "Learning Deep Learning and Computer Vision",
    ],
  },
  {
    year: "2022 – 2024",
    degree: "Higher Secondary Education",
    institute: "Sahajanand Vidyalaya",
    points: [
      "Strong focus on Mathematics and Computer Science",
      "Built foundation for programming and logical thinking",
    ],
  },
];

export default function Education() {

  return (

    <section
      id="education"
      className="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12 text-white overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[#050510]" />

      <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-purple-600 opacity-10 blur-[180px] rounded-full"></div>

      <div className="absolute top-[40%] right-[15%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-cyan-500 opacity-10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Title */}

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Education{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Timeline
          </span>
        </h2>

        <p className="text-gray-400 text-center mb-12 md:mb-20 text-sm sm:text-base">
          My academic journey in Artificial Intelligence & Technology
        </p>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500"></div>

          {education.map((item, index) => {

            const isLeft = index % 2 === 0;

            return (

              <div
                key={index}
                className={`relative mb-12 md:mb-16 flex ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* Card */}

                <div className="ml-12 md:ml-0 w-full md:w-[45%] p-5 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur hover:border-purple-400 transition">

                  <div className="text-xs sm:text-sm text-gray-400 mb-1">
                    {item.year}
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="text-purple-400 mb-4 text-sm sm:text-base">
                    {item.institute}
                  </p>

                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">

                    {item.points.map((point, i) => (

                      <li key={i} className="flex gap-2">

                        <span className="text-purple-400">•</span>

                        {point}

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Timeline Node */}

                <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">

                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-purple-500">

                    <div className="absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-40"></div>

                    <FaGraduationCap className="relative text-white text-xs sm:text-sm" />

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}