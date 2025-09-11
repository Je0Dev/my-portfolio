// src/components/Hero.tsx
'use client'; // This is a client component for the animation library
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import HoverGifText from './HoverGifText';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         {/* ✅ THE FIX: Change this <p> tag to a <div> tag */}
        <div className="text-lg md:text-2xl mb-8 text-gray-300">
          I'm a Full-Stack Engineer who loves building {' '}
          <HoverGifText gifUrl="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmdxdzgwM3lqajllZGtjOHE5amp5MjA0NjNtY29jcnF2YjJwNzkyayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tUgrsJ4TJ800kvROdc/giphy.gif">
            creative
          </HoverGifText>
          {' '} and interactive web experiences.
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Hi, I'm Your Name
          </span>
        </h1>
        
        <TypeAnimation
          sequence={[
            'A Passionate Web Developer',
            2000,
            'A Full-Stack Engineer',
            2000,
            'A Creative Problem Solver',
            2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-lg md:text-2xl mb-8 text-gray-300"
        />

        <motion.a 
          href="#projects" 
          className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full inline-block"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(56,189,248)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;