import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/ZiglaCity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition transform hover:scale-110"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/ziglacity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition transform hover:scale-110"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://instagram.com/zigla_city"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition transform hover:scale-110"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="mailto:ziglacity@gmail.com"
            className="hover:text-purple-500 transition transform hover:scale-110"
          >
            <MdEmail className="text-2xl" />
          </a>
        </div>
        
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} <span className="text-purple-500">Zigla City</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
