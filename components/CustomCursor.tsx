"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {

  const cursorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (

    <img
      ref={cursorRef}
      src="/cursor.png"
      alt="cursor"
      className="fixed w-8 h-8 pointer-events-none z-[99999]"
      style={{ transform: "translate(-50%, -50%)" }}
    />

  );

}