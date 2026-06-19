"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBrain,
  FaGithub,
  FaExternalLinkAlt,
  FaCrown,
  FaCodeBranch,
  FaGitAlt,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

/* ─────────────────────────────────────────────
   OWNED PROJECTS
───────────────────────────────────────────── */
const ownedProjects = [
  {
    title: "Theft Detection System",
    short:
      "Real-time retail surveillance app using a custom-trained YOLO model to detect cash drawer states and theft events with automatic evidence capture.",
    full: "A computer vision application built with Streamlit and Ultralytics YOLO for retail loss prevention. The system processes uploaded surveillance videos, detects cash drawer OPEN/CLOSED states, and flags theft events in real time. When theft is detected, evidence frames are automatically saved with a cooldown to prevent duplicates. The custom-trained YOLOv8 model (best2.pt) was purpose-built for drawer and theft detection, and the entire app is deployed on Streamlit Community Cloud.",
    tech: [
      "Python",
      "Streamlit",
      "Ultralytics YOLO",
      "OpenCV",
      "PyTorch",
      "NumPy",
      "Computer Vision",
    ],
    github: "https://github.com/darshil2032007/theft-detection-system",
    demo: "https://theft-detection-system.streamlit.app/",
  },
  {
    title: "Smartphone Market Analysis",
    short:
      "EDA project exploring how hardware specs influence smartphone pricing using feature engineering, a custom spec score, and rich visualizations.",
    full: "This Jupyter Notebook project performs in-depth exploratory data analysis on a real smartphone dataset. Key engineered features include PPI (Pixels Per Inch), Price-per-RAM, Price-per-Storage, and a composite Specification Score that segments devices into Basic, Good, and Premium tiers. The analysis surfaces key pricing drivers — RAM, storage, and processor speed — detects potentially overpriced devices via a Price-to-Spec ratio, and examines how different brands position themselves in the market. Visualizations include price distribution plots, brand comparison box plots, spec-score vs price scatter plots, and a correlation heatmap.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Feature Engineering",
      "EDA",
    ],
    github: "https://github.com/darshil2032007/smartphone-market-analysis",
    demo: "#",
  },
  {
    title: "Student Performance Analysis",
    short:
      "EDA on student exam scores across Math, Reading, and Writing — uncovering the impact of gender, parental education, and test preparation.",
    full: "A comprehensive Exploratory Data Analysis project using a real student performance dataset. The notebook investigates score distributions across Math, Reading, and Writing, engineers a Total Score and Average Score metric, and examines how demographic and socio-academic factors — gender, parental education level, race/ethnicity, and test preparation course completion — influence academic outcomes. Key findings include a strong Reading–Writing correlation, a measurable boost from test prep, and higher Math score variability compared to other subjects. All insights are backed by Seaborn and Matplotlib visualizations.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "EDA",
    ],
    github: "https://github.com/darshil2032007/student-performance-analysis",
    demo: "#",
  },
  {
    title: "Trip Planner",
    short:
      "Full-stack travel planning app built with Flask and MySQL — featuring itinerary management, expense tracking, destination seeding, and PDF invoice generation.",
    full: "A full-stack trip planning web application with a Flask backend and MySQL database. Users can create and manage trips, build day-by-day itineraries, log travel expenses, and explore curated destinations like Goa, Jaipur, Maldives, Paris, Ladakh, and Dubai — each with dedicated image assets. The app includes multi-user support, hotel seeding scripts, spot coordinate seeding for map integration, and generates PDF invoices for bookings. The frontend is built with HTML, CSS, and JavaScript with Jinja2 templates served via Flask.",
    tech: [
      "Python",
      "Flask",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Jinja2",
      "PDF Generation",
    ],
    github: "https://github.com/darshil2032007/trip-planner",
    demo: "#",
  },
  {
    title: "AI Bridge",
    short:
      "Chrome extension that transfers conversation context between ChatGPT, Claude, Gemini, Perplexity, and Grok using Groq-powered AI summarization.",
    full: "AI Bridge is a Manifest V3 Chrome Extension built with React 18, TypeScript, and Vite. It extracts conversation history from any supported AI platform using resilient DOM adapters (multiple selector fallback strategies), sends the conversation to Groq's LLaMA 3.3 70B for structured context analysis, and generates a continuation prompt that is auto-injected into the target platform. The extension features a glassmorphism dark-mode popup UI, Zustand global state management, Chrome Storage API for secure local API key storage, and a usage tracking progress bar. Zero backend — no data leaves the user's browser except to Groq's API.",
    tech: [
      "TypeScript",
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Groq API",
      "Zustand",
      "Chrome Extension MV3",
      "LLaMA 3.3 70B",
    ],
    github: "https://github.com/darshil2032007/AI-Bridge",
    demo: "#",
  },
];
/* ─────────────────────────────────────────────
   CONTRIBUTED PROJECTS
───────────────────────────────────────────── */
const contributedProjects = [
  {
    title: "AI Cover Letter Generator",
    repo: "career-pilot",
    repoOwner: "anurag3407",
    short:
      "Built a full-stack AI cover letter generator into the career-pilot platform — PDF upload, Groq-powered extraction, tone selection, and PDF download.",
    full: "Contributed a fully functional AI Cover Letter Generator to career-pilot, an open-source AI-powered career platform (120+ stars, 760+ forks). The feature lives at /cover-letter and implements a 3-step guided workflow: users upload a resume PDF (drag & drop), paste a job description, choose a tone (Formal / Conversational / Enthusiastic), and receive a tailored cover letter generated by Groq's LLaMA 3.3 70B in seconds. The implementation is purely additive — 4 new files, 3 modified. Backend uses Express routes and a Groq service for PDF extraction and letter generation. PDF download is powered by PDFKit (already a project dependency). The PR was reviewed by CodeRabbit and CodeAnt AI, passed all 5 pre-merge checks, and was merged by the maintainer on Jun 9, 2026.",
    contribution: "Built the entire feature end-to-end: Groq service, 3 Express API endpoints, React 3-step UI page, ResumeSelector component, and PDF download — purely additive, no existing routes modified.",
    tech: ["React", "Node.js", "Express", "Groq API", "LLaMA 3.3 70B", "PDFKit", "Firebase", "JavaScript"],
    github: "https://github.com/anurag3407/career-pilot",
    pr: "https://github.com/anurag3407/career-pilot/pull/3421",
  },
];

/* ─────────────────────────────────────────────
   MODAL STATE TYPE
───────────────────────────────────────────── */
type ModalProject = {
  title: string;
  full: string;
  tech: string[];
  github: string;
  demo?: string;
  pr?: string;
  repo?: string;
  repoOwner?: string;
  contribution?: string;
  isContribution?: boolean;
};

export default function Projects() {
  const [selected, setSelected] = useState<ModalProject | null>(null);

  const openOwned = (p: (typeof ownedProjects)[0]) =>
    setSelected({ ...p, isContribution: false });

  const openContrib = (p: (typeof contributedProjects)[0]) =>
    setSelected({ ...p, isContribution: true });

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050510]" />
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-purple-600 opacity-10 blur-[180px] rounded-full" />
      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-cyan-500 opacity-10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Title ── */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 md:mb-16 text-sm sm:text-base">
          Innovative AI solutions that push the boundaries of what's possible
        </p>

        {/* ══════════════════════════════════════
            OWNED PROJECTS GRID
        ══════════════════════════════════════ */}
        <div className="flex items-center gap-3 mb-6">
          <FaCrown className="text-purple-400 text-sm" />
          <span className="text-sm font-semibold text-purple-300 uppercase tracking-widest">
            Personal Projects
          </span>
          <div className="flex-1 h-px bg-purple-500/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-20">
          {ownedProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => openOwned(project)}
              className="cursor-pointer p-6 sm:p-8 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur
                hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-purple-500 blur-xl opacity-40 rounded-lg" />
                  <div className="relative text-purple-400 text-xl">
                    <FaBrain />
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  <FaCrown className="text-[10px]" />
                  Owner
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-5">{project.short}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-800 px-3 py-1 rounded-md text-gray-300">
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

        {/* ══════════════════════════════════════
            OPEN SOURCE CONTRIBUTIONS GRID
        ══════════════════════════════════════ */}
        <div className="flex items-center gap-3 mb-6">
          <FaCodeBranch className="text-cyan-400 text-sm" />
          <span className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">
            Open Source Contributions
          </span>
          <div className="flex-1 h-px bg-cyan-500/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {contributedProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => openContrib(project)}
              className="cursor-pointer p-6 sm:p-8 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur
                hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-30 rounded-lg" />
                  <div className="relative text-cyan-400 text-xl">
                    <FaGitAlt />
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                    <FaCodeBranch className="text-[10px]" />
                    Contributor
                  </span>
                  <span className="text-[10px] text-gray-500">
                    {project.repoOwner}/{project.repo}
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-5">{project.short}</p>

              {/* Contribution summary chip */}
              <div className="mb-5 flex items-start gap-2 bg-cyan-500/5 border border-cyan-500/15 rounded-lg px-3 py-2">
                <FaGitAlt className="text-cyan-400 text-xs mt-0.5 shrink-0" />
                <p className="text-xs text-cyan-200/70 leading-relaxed line-clamp-2">
                  {project.contribution}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-800 px-3 py-1 rounded-md text-gray-300">
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

      {/* ══════════════════════════════════════
          MODAL
      ══════════════════════════════════════ */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 p-4 sm:p-6">
          <div
            className={`bg-[#0b0b14] rounded-xl max-w-3xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto border ${
              selected.isContribution
                ? "border-cyan-500/30"
                : "border-purple-500/30"
            }`}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-white text-2xl"
            >
              <MdClose />
            </button>

            {/* Title + badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold">{selected.title}</h3>
              {selected.isContribution ? (
                <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                  <FaCodeBranch className="text-[10px]" />
                  Open Source Contribution
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  <FaCrown className="text-[10px]" />
                  Personal Project
                </span>
              )}
            </div>

            {/* Repo reference for contributions */}
            {selected.isContribution && selected.repoOwner && selected.repo && (
              <p className="text-xs text-gray-500 mb-6">
                Contributed to{" "}
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  {selected.repoOwner}/{selected.repo}
                </a>
              </p>
            )}

            {/* Full description */}
            <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
              {selected.full}
            </p>

            {/* What I built (contributions only) */}
            {selected.isContribution && selected.contribution && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-cyan-300">My Contribution</h4>
                <div className="bg-cyan-500/5 border border-cyan-500/15 rounded-lg px-4 py-3">
                  <p className="text-sm text-cyan-200/80 leading-relaxed">{selected.contribution}</p>
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {selected.tech.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    selected.isContribution
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-purple-500/20 text-purple-400"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* GitHub repo */}
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 sm:px-6 py-2 border border-gray-700 rounded-lg hover:border-gray-400 transition"
              >
                <FaGithub />
                {selected.isContribution ? "View Repo" : "GitHub"}
              </a>

              {/* PR link (contributions only) */}
              {selected.isContribution && selected.pr && (
                <a
                  href={selected.pr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 sm:px-6 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
                >
                  <FaCodeBranch />
                  View PR #3421
                </a>
              )}

              {/* Live demo (owned only) */}
              {!selected.isContribution && selected.demo && selected.demo !== "#" && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 sm:px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

              {!selected.isContribution && selected.demo === "#" && (
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