"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // detect touch devices
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isTouch) {
      setIsDesktop(true);
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    if (!isTouch) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (!isDesktop) return null;

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