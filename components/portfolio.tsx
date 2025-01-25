import Projects from "./Sections/Projects";
import Footer from "./Sections/Footer";
import Contact from "./Sections/Contact";
import About from "./Sections/About";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";

export default function Portfolio() {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, transparent 20%, #0b192e 20%, #0b192e 80%, transparent 80%, transparent) 0% 0% / 56px 56px," +
          "radial-gradient(circle, transparent 20%, #0b192e 20%, #0b192e 80%, transparent 80%, transparent) 28px 28px / 56px 56px," +
          "linear-gradient(#182940 4px, transparent 4px) 0px -2px / 28px 28px," +
          "linear-gradient(90deg, #182940 4px, #0b192e 4px) -2px 0px / 28px 28px",
        backgroundColor: "#0b192e",
      }}
      className="text-[#ccd6f6]"
    >
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
