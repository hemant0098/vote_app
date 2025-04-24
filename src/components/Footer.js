// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-brand">
          <h3>Voting App</h3>
          <p>© {new Date().getFullYear()} | Built by You 💻</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#vote">Vote</a>
          <a href="#results">Results</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
