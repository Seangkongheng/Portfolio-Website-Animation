import React from "react";
import "../Contact/Contact.css";
import { motion } from "framer-motion";
const Contact = () => {
  const contactLeftAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const contactRightAnimation = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <div className="contact-container mt-5">
        <div className="contact-container-content">
          <div className="container">
            <div className="contact-item">
              <motion.div
                variants={contactLeftAnimation}
                initial="hidden"
                whileInView="visible" // Trigger animation on scroll
                viewport={{ once: true, amount: 0.5 }} // Only once, when 50% in view
                transition={{ duration: 0.5, delay: 0.3 }}
                className="contact-description"
              >
                <h1 className="text-info">CONTACT</h1>
                <p className="mt-5">Phone : 0969907215</p>
                <p>Email : 0969907215</p>
                <p>Telgram : 0969907215</p>
              </motion.div>
              <motion.div
                variants={contactRightAnimation}
                initial="hidden"
                whileInView="visible" // Trigger animation on scroll
                viewport={{ once: true, amount: 0.5 }} // Only once, when 50% in view
                transition={{ duration: 0.5, delay: 0.3 }}
                className="contact-form"
              >
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="">First Name</label>
                    <input
                      placeholder="Enter Frist name"
                      className="form-control"
                      type=""
                    />
                  </div>
                  <div className="col-6 ">
                    <label htmlFor="">First Name</label>
                    <input
                      placeholder="Enter Last Name"
                      className="form-control"
                      type=""
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <label htmlFor="">Email</label>
                    <input
                      placeholder="example@gmail.com"
                      className="form-control"
                      type=""
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <label htmlFor="">Description</label>
                    <textarea name="" className="form-control" id=""></textarea>
                    <button className="btn btn-primary mt-5">Submit</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
