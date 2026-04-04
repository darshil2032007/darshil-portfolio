"use client";

import { useEffect } from "react";

export default function MouseGlow() {

  useEffect(() => {

    const glow = document.getElementById("cursor-glow");

    const moveGlow = (e: MouseEvent) => {

      if (glow) {

        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;

      }

    };

    window.addEventListener("mousemove", moveGlow);

    return () => {

      window.removeEventListener("mousemove", moveGlow);

    };

  }, []);

  return (

    <div
      id="cursor-glow"
      className="pointer-events-none fixed w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"
    />

  );

}