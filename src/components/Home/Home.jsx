import React from "react";
import { motion } from "framer-motion";
import "../Home/Home.css";
import Image from "../../assets/seangkongheng.jpg";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="home-content">
          <motion.div
            className="home-text"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>SEANG KONGHENG</p>
            <h1>FRONT END WEB DEVELOPER</h1>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </motion.button>
          </motion.div>
          <motion.div
            className="home-image"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="home-image-frame">
              <img src={Image} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
