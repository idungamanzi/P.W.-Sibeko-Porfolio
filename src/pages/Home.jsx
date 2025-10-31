import { motion } from "framer-motion";
import profilePic from "../assets/Profile-Pic.jpeg";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
  {/* Profile Image */}
  <div className="relative mb-8">
  <div className="absolute inset-0 rounded-full bg-blue-600 blur-[90px] opacity-20"></div>
  <motion.img
    src={profilePic}
    alt="Phakamani Sibeko"
    className="relative w-56 h-56 rounded-full object-cover shadow-xl"
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  />
</div>

  {/* Main Name Heading */}
  <motion.h1
    className="text-4xl md:text-6xl font-bold text-blue-400"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    Hello, I’m Phakamani Sibeko
  </motion.h1>

  {/* Professional Roles */}
  <motion.h2
    className="text-2xl md:text-3xl font-semibold text-gray-200 mt-4"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    Software Developer | AI Enthusiast | CyberSecurity
  </motion.h2>

  {/* Sub Text */}
  <motion.p
    className="text-gray-400 mt-4 max-w-xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    Building intelligent, secure, and scalable systems with innovation and ethical computing at their core.
  </motion.p>

  {/* Buttons */}
  <motion.div
    className="mt-8 flex gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
  >
    <a
      href="#projects"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition"
    >
      View My Work
    </a>

    <a
      href="/Phakamani-sibeko-Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-xl transition"
    >
      View CV
    </a>

  </motion.div>
</section>

  );
}


