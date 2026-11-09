import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "/Home/home";
import About from "/About/about";
import Projects from "./pages/Projects/projects";
import Contact from "./pages/Contact/contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home"element={ <Home/> } />
        <Route path="/about"element={ <About/> } />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App
