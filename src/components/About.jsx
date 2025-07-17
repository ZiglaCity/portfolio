import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6"
    >
      <div className="max-w-5xl text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-purple-500">Me</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          “Two names. One mind. <span className="text-purple-500">Solomon</span>, scholar of systems and soul. 
          <span className="text-pink-500"> Zigla City</span>, architect of code and chaos. 
          Who you get? Depends on the convo...”
        </motion.p>

        <motion.div
          className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            Hey, I’m Zigla (or Solomon Dzah if we’re being formal). I’m currently pursuing
            <span className="text-purple-400 font-semibold"> Computer Science</span> at the
            <span className="text-purple-400 font-semibold"> University of Ghana</span>, and my passion lies
            in building intelligent, secure, and scalable systems that make life easier.
          </p>
          <p className="mt-4">
            When I’m not deep in code, you’ll probably find me soaked in endless games of chess, sharpening my typing speed,
            vibing to lo-fi beats at 2 AM, watching Lionel Messi doing his magic, or cooking up my next big idea. Life’s short—
            why not build something that matters?
          </p>
          <p className="mt-7">"Innovation Over Imitation, Always!"</p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {["Node.js", "FastAPI", "PostgreSQL", "Supabase", "React", "Tailwind", "AI/ML"].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-full text-purple-400 font-medium shadow-md hover:shadow-purple-500/50 transition"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
