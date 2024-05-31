import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [logoAtTop, setLogoAtTop] = useState(false);

  const logoVariants = {
    center: {
      y: '0%', // Centered vertically
      x: '-50%', // Centered horizontally based on its width
      top: '50%',
      left: '50%',
      position: 'absolute',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    },
    top: {
      y: '-50%',
      top: '40px', // Adjusted to move 40px down when on the top
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const pageVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5
      }
    }
  };

  const toggleLogoPosition = () => {
    setLogoAtTop(!logoAtTop);
  };

  return (
    <div className="app" onClick={toggleLogoPosition}>
      <motion.div
        className="logo"
        variants={logoVariants}
        initial="center"
        animate={logoAtTop ? "top" : "center"}
      >
        <h1>DOVEHOUSE CAPITAL</h1>
      </motion.div>

      {logoAtTop && (
        <motion.div
          className="content-page"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
        >
          <h1>Investment Strategies Worldwide</h1>
          <p>Transparent, AI-driven strategies for benchmark-beating returns.</p>
        </motion.div>
      )}
    </div>
  );
}

export default App;
