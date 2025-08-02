import { BiSortAlt2 } from "react-icons/bi"
import { motion } from "framer-motion"

export default function Sorter ({sortBlogs}){
  return (
    <motion.div className="mt-3.5 mx-2" title="Sort based on time posted"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <button 
        className="h-6 w-6 bg-purple-600 text-white rounded-sm hover:bg-purple-700 transition cursor-pointer"
        onClick={sortBlogs}
      >
        <BiSortAlt2 className="mx-auto"/>
      </button>
    </motion.div>
  )
}