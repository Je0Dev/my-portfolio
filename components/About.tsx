// src/components/About.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Scene from './Scene';

const skills = [
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} /> },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div /* ... */ >
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-cyan-400">Me</span>
          </h2>
          {/* We'll use CSS Grid for a more robust layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: 3D Scene */}
            <div className="h-96 md:h-full">
              <Scene />
            </div>

            {/* Right Column: Text Content */}
            <div>
              <p className="text-lg mb-6 text-gray-300">
                Hello! I'm a full-stack developer specializing in creating modern, responsive, and user-friendly web applications. My passion lies in turning complex problems into beautiful, intuitive designs.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">My Skills</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {/* ... (Your skills mapping code remains the same) */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;