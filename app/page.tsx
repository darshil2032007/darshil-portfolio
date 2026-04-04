import CanvasBackground from "../components/CanvasBackground";
import MouseGlow from "../components/MouseGlow";
import AIChat from "../components/AIChat";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <MouseGlow />
      <CustomCursor />
      <Navbar />
      <CanvasBackground />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
        <AIChat />
        <Footer />
      </div>
      
    </main>
  );
}
