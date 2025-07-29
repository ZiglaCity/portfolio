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
import { supabase } from "./utils/supabase.config";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [blogs, setBlogs] = useState([]);

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
