// src/components/LiquidNav.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 1. Import the icons you want to use
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';

// 2. Add a unique icon to each nav item
const navItems = [
  { id: 'hero', name: 'Home', icon: <FaHome size={24} /> },
  { id: 'about', name: 'About', icon: <FaUser size={24} /> },
  { id: 'projects', name: 'Projects', icon: <FaProjectDiagram size={24} /> },
  { id: 'contact', name: 'Contact', icon: <FaEnvelope size={24} /> },
];

export const LiquidNav = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* The SVG filter that creates the gooey effect (remains the same) */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <nav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        // 3. Changed position to bottom-center
        className="fixed bottom-1 left-1/2 -translate-x-1/2 z-50"
        style={{ filter: 'url(#gooey)' }}
      >
        <motion.div
          className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center cursor-pointer text-black"
        >
          <BsGridFill size={28} />
        </motion.div>

        <AnimatePresence>
          {hovered && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { staggerChildren: 0.1 } }}
              exit={{ opacity: 0, transition: { staggerChildren: 0.1, when: "afterChildren" } }}
              className="absolute top-0 right-0"
            >
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  className="absolute top-0 right-0 w-16 h-16"
                  initial={{ x: 0, y: 0 }}
                  animate={{
                    x: Math.cos(i * (Math.PI / (navItems.length - 1)) - Math.PI) * 90,
                    y: Math.sin(i * (Math.PI / (navItems.length - 1)) - Math.PI) * 90
                  }}
                  exit={{ x: 0, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <a href={`#${item.id}`} className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                    {/* 4. Display the icon instead of text */}
                    {item.icon}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
