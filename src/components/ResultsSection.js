// src/components/ResultsSection.jsx
import React from "react";
import "./ResultsSection.css";
import { motion } from "framer-motion";

const ResultsSection = ({ candidates }) => {
  if (!candidates || candidates.length === 0) return null;

  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);
  const winner = candidates.reduce((max, c) => (c.votes > max.votes ? c : max), candidates[0]);

  return (
    <section className="results-section" id="results">
      <h2>📊 Voting Results</h2>
      <div className="results-container">
        {candidates.map((c) => {
          const percent = totalVotes ? Math.round((c.votes / totalVotes) * 100) : 0;
          return (
            <motion.div
              className={`result-card ${c.id === winner.id ? "winner" : ""}`}
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={c.image} alt={c.name} />
              <h3>{c.name}</h3>
              <p>{c.votes} votes ({percent}%)</p>
              {c.id === winner.id && <span className="badge">🏆 Winner</span>}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ResultsSection;
