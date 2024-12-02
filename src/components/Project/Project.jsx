import React from "react";
import "../Project/Project.css";
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";
import { motion } from "framer-motion";
const Project = () => {
  const cardprojectAnimationLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const cardprojectAnimationRight = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };
  const cardprojectAnimationcenter = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="project-container">
      <div className="project-container-content">
        <div className="container">
          <h1 className="mt-5 text-center text-info">MY PROJECTS</h1>
          <div className=" project-container-list mt-5">
            <motion.div
              variants={cardprojectAnimationLeft}
              initial="hidden"
              whileInView="visible" // Trigger animation on scroll
              viewport={{ once: true, amount: 0.5 }} // Only once, when 50% in view
              transition={{ duration: 0.5, delay: 0.3 }}
              className="project-list-card"
            >
              <div className="project-list-card-image">
                <img src={Project2} alt="" />
              </div>
              <h4 className="text-center text-warning mt-4">Movies</h4>
              <div className="project-list-card-description">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores rem dolorum iste sint nam ab provident explicabo!
                  Beatae dignissimos unde aliquam repellendus hic quidem earum,
                  cumque omnis architecto. Fugiat, corporis.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardprojectAnimationcenter}
              initial="hidden"
              whileInView="visible" // Trigger animation on scroll
              viewport={{ once: true, amount: 0.5 }} // Only once, when 50% in view
              transition={{ duration: 0.5, delay: 0.3 }}
              className="project-list-card"
            >
              <div className="project-list-card-image">
                <img src={Project1} alt="" />
              </div>
              <h4 className="text-center text-warning mt-4">Travel Website</h4>
              <div className="project-list-card-description">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores rem dolorum iste sint nam ab provident explicabo!
                  Beatae dignissimos unde aliquam repellendus hic quidem earum,
                  cumque omnis architecto. Fugiat, corporis.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardprojectAnimationRight}
              initial="hidden"
              whileInView="visible" // Trigger animation on scroll
              viewport={{ once: true, amount: 0.5 }} // Only once, when 50% in view
              transition={{ duration: 0.5, delay: 0.3 }}
              className="project-list-card"
            >
              <div className="project-list-card-image">
                <img src={Project3} alt="" />
              </div>
              <h4 className="text-center text-warning mt-4">K-POP Website</h4>
              <div className="project-list-card-description">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores rem dolorum iste sint nam ab provident explicabo!
                  Beatae dignissimos unde aliquam repellendus hic quidem earum,
                  cumque omnis architecto. Fugiat, corporis.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
