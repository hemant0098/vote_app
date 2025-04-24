import React from "react";
import { motion } from "framer-motion";

const CandidateCard = ({ candidate, onVote, voteCount }) => {
  return (
    <motion.div
      style={styles.card}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img src={candidate.image} alt={candidate.name} style={styles.image} />
      <h3>{candidate.name}</h3>
      <p>{candidate.party}</p>
      <button onClick={() => onVote(candidate._id)} style={styles.voteButton}>
        Vote
      </button>
      <div style={styles.progressContainer}>
        <div style={{ ...styles.progressBar, width: `${voteCount * 10}%` }}></div>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    width: "200px",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
    transformStyle: "preserve-3d",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  voteButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#3f51b5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  progressContainer: {
    marginTop: "10px",
    height: "10px",
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: "10px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#3f51b5",
    transition: "width 0.3s ease",
  },
};

export default CandidateCard;
