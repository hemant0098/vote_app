// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import VotePage from "./components/VoteSection";
import ResultsSection from "./components/ResultsSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Candidate A", votes: 0, image: "https://cdn.shopify.com/s/files/1/0565/8021/0861/files/unnamed.png?v=1732702084/300" },
    { id: 2, name: "Candidate B", votes: 0, image: "https://cdn.shopify.com/s/files/1/1638/5471/files/Untitled_design_66_480x480.png?v=1671448431/300" },
    // add more if you like
  ]);

  const handleVote = (id) =>
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, votes: c.votes + 1 } : c))
    );

  return (
    <>
      <Navbar />
      <Home />
      <VotePage candidates={candidates} onVote={handleVote} />
      <ResultsSection candidates={candidates} />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
