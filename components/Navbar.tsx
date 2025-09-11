// src/components/Navbar.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNameHovered, setIsNameHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textVariants = { /* ... (remains the same) */ };
  const gifVariants = { /* ... (remains the same) */ };

  return (
    <nav 
      className={`fixed w-full z-20 top-0 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        <a 
          href="#hero" 
          className="relative text-2xl font-bold transition-colors duration-300"
          onMouseEnter={() => setIsNameHovered(true)}
          onMouseLeave={() => setIsNameHovered(false)}
        >
          <AnimatePresence>
            {isNameHovered ? (
              <motion.img
                key="fire-gif"
                // ✅ New, truly transparent .webp file URL
                src="https://tenor.com/view/red-fire-gif-20649085.gif"
                alt="Blue fire"
                className="absolute inset-0 w-full h-full object-contain"
                variants={gifVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            ) : (
              <motion.span
                key="name-text"
                variants={textVariants}
                exit="exit"
                className="hover:text-cyan-400"
              >
                Your Name
              </motion.span>
            )}
          </AnimatePresence>
          <span className="opacity-0">Your Name</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {/* ... (Your links remain the same) */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;