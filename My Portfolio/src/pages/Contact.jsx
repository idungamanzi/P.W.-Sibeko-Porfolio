// src/pages/Contact.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-6 text-blue-400">Let's Connect</h3>
      <p className="text-gray-300 mb-8">Reach out for collaborations, research, or professional opportunities.</p>

      <div className="flex justify-center gap-6 text-blue-400">
        <a href="https://github.com/idungamanzi" target="_blank" rel="noreferrer" className="hover:text-white">
          <Github />
        </a>
        <a href="https://linkedin.com/in/pwm-sibeko-t1000" target="_blank" rel="noreferrer" className="hover:text-white">
          <Linkedin />
        </a>
        <a href="mailto:phakamanimluleki@gmail.com" className="hover:text-white">
          <Mail />
        </a>
      </div>
    </section>
  );
}
