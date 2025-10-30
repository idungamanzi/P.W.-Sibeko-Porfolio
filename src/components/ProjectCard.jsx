import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, tech, desc, link }) {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg block"
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4 className="text-xl font-semibold text-blue-300">{title}</h4>
      <p className="text-gray-400 text-sm mt-2">{tech}</p>
      <p className="text-gray-300 mt-4">{desc}</p>
    </motion.a>
  );
}
