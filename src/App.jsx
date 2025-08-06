import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Timeline';
import Post from './components/Post';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import BlogsPage from "./pages/BlogsPage";
import blogs from './data/blogs';
import tagsWithIds, {titlesWithIds} from "./utils/tagsWithIds";
import { sortSearchedResult, formatFetchedBlogs } from './utils/utils'; 

import { supabase } from "./utils/supabase.config";
const initialTitlesAndBlogIds = titlesWithIds(blogs, false);
const InitialTagsAndBlogIds = tagsWithIds(blogs, false);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResult] = useState(null);  
  const [availableBlogs, setBlogs] = useState(blogs);
  const [titlesAndBlogIds, setTitlesAndBlogIds] = useState(initialTitlesAndBlogIds);
  const [tagsAndBlogIds, setTagsAndBlogIds] = useState(InitialTagsAndBlogIds);
  const [isSorted, setIsSorted] = useState(false);
  
  console.log("Blogs reference changed:", availableBlogs);


  const searchBlog = () => {
    let searchBlogIds = [];
    let newSearchResults = [];
    if (!searchWord || searchWord === ""){
      setSearchResult(availableBlogs);
      return
    }
    for(const [key, value] of Object.entries(tagsAndBlogIds)){
      if (searchWord.toLowerCase().includes(key) && Array.isArray(value)) {
        console.log("Key", key, "Value: ", value)
        searchBlogIds.push(...value);
      }
    }
    
    for(const [key, value] of Object.entries(titlesAndBlogIds)){
      if ( (searchWord.toLowerCase() == key || key.includes(searchWord.toLowerCase()) ) && Array.isArray(value)) {
        console.log("Key", key, "Value: ", value)
        searchBlogIds.push(...value);
      }
    }
    let seen = [];
    searchBlogIds.forEach((id) => {
      if(!seen.includes(id)){
        const foundBlog = availableBlogs[id - 1];
        if (foundBlog) {
          newSearchResults.push(foundBlog);
        }
        seen.push(id);
      }
    });
    setSearchResult(newSearchResults);
    console.log("SearchBlog: ", searchBlogIds);
    console.log("Search word: ", searchWord)
    console.log("Search Results", newSearchResults);
  }

  function sortBlogs(){
    let sortedBlogs = [];
    const n = availableBlogs.length - 1;
    for(let i = n; i > -1; i--){
      sortedBlogs.push(availableBlogs[i]);
    }

    if (searchResults && searchResults.length > 0){
      const sortedResult = sortSearchedResult(searchResults);
      setSearchResult(sortedResult);
    }
    
    console.log("sorted blogs: ", sortedBlogs)
    setBlogs(sortedBlogs);
    let updatedTitlesWithIds = titlesWithIds(sortedBlogs, !isSorted);
    let updatedTagsWithIds = tagsWithIds(sortedBlogs, !isSorted);
    setTitlesAndBlogIds(updatedTitlesWithIds);
    setTagsAndBlogIds(updatedTagsWithIds);
    setIsSorted((prev) => !prev);
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

      const formattedData = formatFetchedBlogs(data);

      let latestTTBI = titlesWithIds(formattedData, isSorted)
      let latestTBI = tagsWithIds(formattedData, isSorted);
      setTitlesAndBlogIds(latestTTBI);
      setTagsAndBlogIds(latestTBI);
      setBlogs(formattedData);
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
    <div className="min-h-screen flex flex-col bg-gray-950 text-black dark:bg-zinc-900 dark:text-white">
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
              setSearchBlog={setSearchResult}
              sortBlogs={sortBlogs}
              searhedBlogs={searchResults} />
            </> } 
          />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
