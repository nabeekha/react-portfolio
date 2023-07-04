import React, { useState, useEffect } from 'react'
import CustomNavbar from './components/Navbar'
import Preloader from "../src/components/Loader";
import Resume from "./components/Resume";
import Header from './components/Header'
import About from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom";
import TopScroll from "./components/TopScroll";
import "./style.css";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, newLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
        newLoad(false)
    }, 1000)
  })

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <CustomNavbar />
        <TopScroll />
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App