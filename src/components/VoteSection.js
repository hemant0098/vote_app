// src/components/VotePage.jsx
import React from "react";
import { motion } from "framer-motion";
import "./VoteSection.css";

const VotePage = ({ candidates, onVote }) => {
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);

  return (
    <section className="vote-page" id="vote">
      <motion.h2
        className="vote-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🗳️ Cast Your Vote
      </motion.h2>

      <div className="cards-container">
        {candidates.map((c) => {
          const pct = totalVotes ? (c.votes / totalVotes) * 100 : 0;
          return (
            <motion.div
              className="card"
              key={c.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-inner">
                <img src={c.image} alt={c.name} className="card-img" />
                <h3 className="card-name">{c.name}</h3>
                <button className="vote-btn" onClick={() => onVote(c.id)}>
                  Vote
                </button>
                <div className="progress-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: `${Math.round(pct)}%` }}
                  />
                  <span className="progress-text">{Math.round(pct)}%</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.a
        href="#results"
        className="view-results"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        View Live Results ↓
      </motion.a>
    </section>
  );
};

export default VotePage;
