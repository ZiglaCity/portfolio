import {motion} from "framer-motion";

export default function Search({ setSearchWord, searchBlog }) {

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value.trim());
  };

  return (
    <motion.div className="flex justify-center items-center w-full max-w-xl mx-auto mb-5 gap-2"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <input
        className="flex-1 h-10 px-4 border border-purple-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
        onChange={handleChange}
        type="text"
        placeholder="Search blog..."
        title="Input tags or blog title keyword to be searched"
      />
      <button
        className="h-10 px-4 bg-purple-600 text-white rounded-sm hover:bg-purple-700 transition cursor-pointer"
        onClick={searchBlog}
      >
        Search
      </button>
    </motion.div>
  );
}
