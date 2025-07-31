import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Timeline';
import Blog from './components/Blog';
import Post from './components/Post';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import BlogsPage from "./pages/BlogsPage";
import blogs from './data/blogs';
import tagsWithIds from "./utils/tagsWithIds";

import { supabase } from "./utils/supabase.config";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResult] = useState(null);  
  const [availableBlogs, setBlogs] = useState(blogs);

  const tagsAndBlogIds = tagsWithIds(blogs);
  console.log("Blogs reference changed:", blogs);


  const searchBlog = () => {
    let searchBlogIds = [];
    let newSearchResults = [];
    if (!searchWord || searchWord === ""){
      newSearchResults = blogs;
      setSearchResult(newSearchResults);
      return
    }
    for(const [key, value] of Object.entries(tagsAndBlogIds)){
      if (searchWord.includes(key) && Array.isArray(value)) {
        searchBlogIds.push(...value);
      }
    }
    searchBlogIds.forEach((id) => {
      const foundBlog = availableBlogs[id - 1];
      if (foundBlog) {
        newSearchResults.push(foundBlog);
      }
    });
    setSearchResult(newSearchResults);
    console.log("SearchBlog: ", searchBlogIds);
    console.log("Search word: ", searchWord)
    console.log("Search Results", newSearchResults);
  }

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("blog")
        .select("*")
        .order("blog_number", { ascending: true });

      if (error) {
        console.error("Error fetching blogs:", error);
        return;
      }

      setBlogs(data);
    };

    fetchBlog();
  }, []);


  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    setDarkMode(storedMode === 'true');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  console.log("Available blogs before rendering: ", availableBlogs);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-zinc-900 dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Experience />
            </>
          }/>
          <Route path="/blogs" element={
            <>
            <BlogsPage 
              setSearchWord={setSearchWord} 
              searchBlog={searchBlog} 
              blogs={availableBlogs} 
              selectedPost={selectedPost}
              setSelectedPost={setSelectedPost}  
              searhedBlogs={searchResults} />
            </> } 
          />
          <Route path="/blog" element={<Blog online_blogs={blogs}/>} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
