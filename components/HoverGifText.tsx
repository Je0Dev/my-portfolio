// src/components/HoverGifText.tsx
'use client';
import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

type HoverGifTextProps = {
  children: ReactNode;
  gifUrl: string;
};

const HoverGifText = ({ children, gifUrl }: HoverGifTextProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y:0});

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const gifVariants = {
    hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <>
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative inline-block cursor-pointer text-cyan-300 hover:text-red-400 underline transition-colors duration-300"
      >
        {children}
      </span>

      <motion.div
        className="fixed top-0 left-0 w-48 h-48 pointer-events-none z-[9999]"
        style={{ x: position.x - 110, y: position.y - 220 }} // Offset to center the gif on the cursor
        variants={gifVariants}
        animate={isHovered ? 'visible' : 'hidden'}
      >
        <img src={gifUrl} alt="hover gif" className="" />
      </motion.div>
    </>
  );
};

export default HoverGifText;
