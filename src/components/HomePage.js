// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import "./HomePage.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>🗳️ Welcome to VoteX</h1>
        <p>Your voice matters. Vote for a better tomorrow.</p>
        <a href="#vote" className="cta-button">Start Voting</a>
      </motion.div>
    </section>
  );
};

export default Home;
