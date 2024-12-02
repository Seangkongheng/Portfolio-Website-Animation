import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  // Framer Motion's useScroll hook for tracking vertical scroll progress
  const { scrollYProgress } = useScroll();

  // Smooth animation for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX, // Scale progress horizontally
          transformOrigin: "0 0", // Start scaling from the left
          height: "7px", // Progress bar height
          backgroundColor: "#3498db", // Color of the progress bar
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      ></motion.div>

      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
