"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_id55eb9",
        "template_jq3j5kk",
        form.current,
        "AJQWHDUDDUwW63_s5",
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatus("Failed to send message. Try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 text-white px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Base background */}

      <div className="absolute inset-0 bg-[#050510]" />

      {/* Purple glow */}

      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-purple-600 opacity-10 blur-[180px] rounded-full"></div>

      {/* Cyan glow */}

      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] bg-cyan-500 opacity-10 blur-[180px] rounded-full"></div>

      <div className="relative z-10">
        {/* Title */}

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              In Touch
            </span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* LEFT CONTACT INFO */}

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Let’s Connect
            </h3>

            {/* Email */}

            <div className="flex items-center gap-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <FaEnvelope className="text-purple-400 text-lg" />
              </div>

              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Email</p>

                <p className="text-white text-sm sm:text-base">
                  darshilsavaliya15@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}

            <div className="flex items-center gap-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <FaPhone className="text-purple-400 text-lg" />
              </div>

              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Phone</p>

                <p className="text-white text-sm sm:text-base">
                  +91 88495 62049
                </p>
              </div>
            </div>

            {/* Location */}

            <div className="flex items-center gap-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <FaMapMarkerAlt className="text-purple-400 text-lg" />
              </div>

              <div>
                <p className="text-gray-400 text-xs sm:text-sm">Location</p>

                <p className="text-white text-sm sm:text-base">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>

            {/* Social Links */}

            <div className="pt-6 border-t border-gray-800">
              <p className="text-gray-400 mb-3 text-sm">Find me on</p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/darshil-savaliya-d20032007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/darshil2032007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://leetcode.com/u/Darshil_Savaliya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                >
                  <SiLeetcode />
                </a>
              </div>
            </div>

            {/* Availability */}

            <div className="mt-6 bg-gray-800 rounded-lg p-4">
              <p className="text-purple-400 font-medium text-sm sm:text-base">
                Available for opportunities
              </p>

              <p className="text-gray-400 text-xs sm:text-sm mt-2">
                I'm currently open to new opportunities and interesting
                projects. Let’s build something amazing together!
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 space-y-6"
          >
            {/* Name */}

            <div>
              <label className="text-xs sm:text-sm text-gray-400">Name</label>

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full mt-2 p-3 bg-gray-950 border border-gray-800 rounded-lg focus:border-purple-500 outline-none text-sm sm:text-base"
              />
            </div>

            {/* Email */}

            <div>
              <label className="text-xs sm:text-sm text-gray-400">Email</label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full mt-2 p-3 bg-gray-950 border border-gray-800 rounded-lg focus:border-purple-500 outline-none text-sm sm:text-base"
              />
            </div>

            {/* Message */}

            <div>
              <label className="text-xs sm:text-sm text-gray-400">
                Message
              </label>

              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                rows={5}
                required
                className="w-full mt-2 p-3 bg-gray-950 border border-gray-800 rounded-lg focus:border-purple-500 outline-none text-sm sm:text-base"
              />
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaPaperPlane />
              Send Message
            </button>

            {/* Status */}

            {status && (
              <p className="text-center text-gray-400 text-sm">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
