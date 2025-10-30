import React from "react";
import SectionHeader from "../components/SectionHeader";
import Modal from "../components/Modal";
import modules from "../data/modulesList";

// Ensure badge images are present under src/assets/badges/
import introCyberBadge from "../assets/badges/introduction-to-cybersecurity.png";
import cyberBadge from "../assets/badges/cyber-threat-management.png";
import ethicalBadge from "../assets/badges/ethical-hacker.png";
import endpointBadge from "../assets/badges/endpoint-security.png";
// you can add more imports later for other badges

export default function Education() {
  const [showModules, setShowModules] = React.useState(false);

  const certificateData = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      img: introCyberBadge,
      verify: "https://www.credly.com/badges/2f915e28-38bb-4dc1-9199-d8c140fdca02/public_url",
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      img: cyberBadge,
      verify: "https://www.credly.com/badges/f1f21a29-74a6-42d6-8a8b-250d19f405c9/public_url",
    },
    {
      title: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      img: ethicalBadge,
      verify: "https://www.credly.com/badges/ba6d3afd-fede-457b-8428-bb2286fb2221/public_url",
    },
    {
      title: "Endpoint Security",
      issuer: "Cisco Networking Academy",
      img: endpointBadge,
      verify: "https://www.credly.com/badges/cb7973be-eb70-49e5-bdde-422776b6327e/public_url",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <SectionHeader>Education</SectionHeader>
      <p className="text-gray-300 mb-4">BSc (Applied Mathematics & Computer Science) — University of Zululand</p>
      <p className="text-gray-400 mb-6">Qualified: <strong>30 November 2024</strong> • Conferred: <strong>09 May 2025</strong></p>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setShowModules(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition"
        >
          View Modules
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificateData.map((c) => (
          <a key={c.title} href={c.verify} target="_blank" rel="noopener noreferrer"
             className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-400 transition">
            <img src={c.img} alt={c.title} className="mx-auto mb-4 w-20 h-20 object-contain" />
            <p className="text-gray-300 font-medium">{c.title}</p>
            <p className="text-gray-400 text-sm">{c.issuer}</p>
          </a>
        ))}
      </div>

      <Modal open={showModules} onClose={() => setShowModules(false)} title="Completed Modules">
        <ul className="text-gray-300 space-y-1 max-h-80 overflow-y-auto text-sm">
          {modules.map((m, i) => <li key={i}>• {m}</li>)}
        </ul>
      </Modal>
    </section>
  );
}
