import React from "react";
import "../About/About.css";
import image from "../../assets/seangkongheng.jpg";
import { motion } from "framer-motion";

const About = () => {
  const animationImage = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const animationDescription = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="about-container">
      <div className="about-container-content">
        <div className="container about-container-item">
          {/* Image Animation */}
          <motion.div
            className="about-container-content-image"
            variants={animationImage}
            initial="hidden"
            whileInView="visible" // Trigger animation on scroll
            viewport={{ once: true, amount: 0.5 }} // Only once, when 50% in view
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={image} alt="" />
          </motion.div>
          {/* Description Animation */}
          <motion.div
            className="about-container-content-description"
            variants={animationDescription}
            initial="hidden"
            whileInView="visible" // Trigger animation on scroll
            viewport={{ once: true, amount: 0.5 }} // Only once, when 50% in view
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1>About Me</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              vitae exercitationem error neque ratione quod, accusamus odit
              repudiandae deserunt provident facilis! Itaque consectetur
              necessitatibus, eius quibusdam alias fugit? Expedita, tempora!
            </p>
            <button className="btn btn-primary mt-3">Read More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
