import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import CustomCursor from "@/components/CustomCursor";
import MouseGlow from "@/components/MouseGlow";
import AIChat from "@/components/AIChat";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darshil Savaliya | AI Engineer Portfolio",
  description:
    "Portfolio of Darshil Savaliya – AI Engineer, Machine Learning Enthusiast, and Developer building intelligent systems and AI-powered applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col bg-[#050510] text-white">

        {/* Mouse Effects */}
        <MouseGlow />
        <CustomCursor />

        {children}

        {/* AI Assistant */}
        <AIChat />

      </body>

    </html>

  );

}