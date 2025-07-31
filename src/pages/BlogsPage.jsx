import Blog from '../components/Blog'
import Search from '../components/Search'
import { motion } from "framer-motion";

export default function BlogsPage({setSearchWord, searchBlog, blogs, selectedPost, setSelectedPost, searhedBlogs}){
  console.log("Available blogs in the blogPage: ", blogs);
  return (
    <section id="blog" className="py-16 bg-gray-950 text-white mt-7">
      <div className="max-w-6xl mx-auto px-6">
          {!selectedPost && (
            <motion.h2
              className="text-4xl font-extrabold text-center mb-8"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Latest <span className="text-purple-500">Blogs</span>
            </motion.h2>
          )}
        {!selectedPost && <Search setSearchWord={setSearchWord} searchBlog={searchBlog}/>   }
        <Blog blogs={blogs} searchedBlogs={searhedBlogs} selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
      </div>
    </section>
  )
}