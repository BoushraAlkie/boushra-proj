import "./App.css";
import Hero from './components/hero';
import AboutMe from "./components/aboutme";
import Blog from "./components/blog";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;