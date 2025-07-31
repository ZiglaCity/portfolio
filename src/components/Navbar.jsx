import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // will work on themes later...
  
  const base = "/portfolio/";

  const navLinks = [
    { name: "Home", href: `${base}#/` },
    { name: "Blog", href: `${base}#/blogs` },
    { name: "Contact", href: `${base}#/contact` },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gray-900/60 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <motion.a
          href="#home"
          className="text-2xl font-extrabold tracking-wide text-purple-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Zigla<span className="text-pink-500">City</span>
        </motion.a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="relative text-lg font-medium group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
          <a
            href={`${base}resume.pdf`}
            className="text-lg font-medium hover:text-purple-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-900/95 flex flex-col items-center py-6 gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg font-medium hover:text-purple-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
