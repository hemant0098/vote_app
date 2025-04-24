// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About the Voting App
      </motion.h2>
      <motion.p
        className="about-text"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        This Voting App allows users to vote for their favorite candidates
        in a simple and user-friendly interface. The app provides live results
        after every vote is cast, making it easy to see the progress of each
        candidate in real-time.
      </motion.p>
      <motion.p
        className="about-text"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our mission is to make the voting process easier, more transparent,
        and accessible for everyone.
      </motion.p>
    </section>
  );
};

export default About;
