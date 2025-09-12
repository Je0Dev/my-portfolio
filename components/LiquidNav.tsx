// src/components/LiquidNav.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

export const LiquidNav = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* The SVG filter that creates the gooey effect */}
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
        className="fixed top-4 right-4 z-50"
        // Apply the SVG filter using a Tailwind CSS class
        style={{ filter: 'url(#gooey)' }}
      >
        <motion.div
          className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center cursor-pointer"
        >
          {/* Main menu button */}
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
                    x: Math.cos(i * (Math.PI / 2) + Math.PI) * 80,
                    y: Math.sin(i * (Math.PI / 2) + Math.PI) * 80
                  }}
                  exit={{ x: 0, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <a href={`#${item.id}`} className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                    {item.name}
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