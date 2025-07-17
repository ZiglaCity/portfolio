import projects from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured <span className="text-purple-500">Projects</span>
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-70"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="flex-1 text-center bg-purple-600 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex-1 text-center border border-gray-500 py-2 rounded-lg hover:border-purple-500 hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
