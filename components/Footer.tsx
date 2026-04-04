"use client";

import { FaStar } from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="relative py-8 sm:py-10 text-white overflow-hidden">

      {/* Base background */}

      <div className="absolute inset-0 bg-[#050510]" />

      {/* Purple glow */}

      <div
        className="absolute left-[20%] bottom-[-80px] sm:bottom-[-100px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]
        bg-purple-600 opacity-10 blur-[150px] sm:blur-[180px] rounded-full"
      ></div>

      {/* Cyan glow */}

      <div
        className="absolute right-[20%] bottom-[-90px] sm:bottom-[-120px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]
        bg-cyan-500 opacity-10 blur-[150px] sm:blur-[180px] rounded-full"
      ></div>

      {/* Content */}

      <div className="relative z-10 border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center items-center gap-3 text-gray-400 text-xs sm:text-sm text-center">

        {/* Purple badge icon */}

        <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-purple-600/20 border border-purple-500/30">

          <div className="absolute inset-0 bg-purple-500/20 blur-md rounded-lg"></div>

          <FaStar className="text-purple-400 text-xs sm:text-sm relative z-10" />

        </div>

        <p>
          © {new Date().getFullYear()} Darshil Savaliya. All rights reserved.
        </p>

      </div>

    </footer>

  );

}