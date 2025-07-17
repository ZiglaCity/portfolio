import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import zigla from "../assets/zigla.png";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center gap-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden px-6">
      
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-3xl opacity-30 top-[-10%] left-[-10%] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl opacity-30 bottom-[-15%] right-[-15%] animate-pulse"></div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-1 shadow-lg">
          <img
            src={zigla}
            alt="Zigla"
            className="rounded-full w-full h-full object-cover border-4 border-gray-900"
          />
        </div>
      </motion.div>

      <div className="text-center md:text-left z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-purple-500">Zigla</span>
        </motion.h1>

        <motion.div
          className="mt-4 text-xl md:text-3xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Backend Engineer",
              2000,
              "Cybersecurity Enthusiast",
              2000,
              "Automation with Python",
              2000,
              "AI & Scalable Systems",
              2000,
              "Full-Stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          className="mt-8 flex gap-6 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 py-3 bg-purple-600 rounded-full font-bold text-lg hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/50 cursor-pointer"
          >
            View Projects
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 py-3 border-2 border-gray-400 rounded-full font-bold text-lg hover:bg-gray-800 hover:border-purple-400 transition-all cursor-pointer"
          >
            About Me
          </ScrollLink>

        </motion.div>
      </div>
    </section>
  );
}
