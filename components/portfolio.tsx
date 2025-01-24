import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";
import Contact from "./Sections/Contact";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";

export default function Portfolio() {
  return (
    <div className="bg-[#0b192e] text-[#ccd6f6]">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Get in Touch Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
