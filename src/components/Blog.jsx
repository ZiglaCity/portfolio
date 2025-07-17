import { useState } from "react";
import blogs from "../data/blogs";
import { motion } from "framer-motion";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-16 bg-gray-950 text-white mt-7">
      <div className="max-w-6xl mx-auto px-6">
        {!selectedPost && (
          <motion.h2
            className="text-4xl font-extrabold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Latest <span className="text-purple-500">Blogs</span>
          </motion.h2>
        )}

        {!selectedPost ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setSelectedPost(post)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="bg-purple-600 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h2 className="text-4xl font-bold mb-4">{selectedPost.title}</h2>
            <p className="text-gray-400 mb-6">{selectedPost.date}</p>
            <p className="text-gray-300 leading-relaxed"   dangerouslySetInnerHTML={{ __html: selectedPost.content }}></p>
            <button
              className="mt-8 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
              onClick={() => setSelectedPost(null)}
            >
              Back to Blogs
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
