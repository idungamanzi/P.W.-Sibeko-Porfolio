import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide text-blue-400">
          Phakamani W. Sibeko
        </h1>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-300">
          {["home", "education", "projects", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-blue-400 cursor-pointer transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu — Smooth Expand/Collapse */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 font-medium text-gray-300 bg-black/80 backdrop-blur-xl">
          {["home", "education", "projects", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-blue-400 cursor-pointer transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
