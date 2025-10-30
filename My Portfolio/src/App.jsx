import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white min-h-screen font-inter">
      <Navbar />
      <main className="pt-16">
        <Home />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
