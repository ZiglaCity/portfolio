import { motion } from "framer-motion";
import timeline from "../data/timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6 pt-6"
    >
      <div className="max-w-5xl w-full">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-purple-500">Journey</span>
      </motion.h2>

        <div className="relative border-l border-gray-700 ml-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-12 ml-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-2 border-4 border-gray-950"></div>

              <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-purple-500/40 transition">
                <h3 className="text-2xl font-bold text-purple-400">{item.role}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.company} • {item.date}</p>
                <p className="text-gray-300 mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-xs px-2 py-1 rounded-full text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
