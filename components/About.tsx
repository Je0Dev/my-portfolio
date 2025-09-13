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
              <p className="text-lg mb-6 text-gray-300">
                With a strong foundation in React, Next.js, Node.js, and TypeScript, I have a proven track record of delivering high-quality, efficient solutions that meet the needs of my clients.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                I am dedicated to staying up-to-date with the latest industry trends and technologies, allowing me to deliver cutting-edge solutions that exceed expectations.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                I am excited to work with you to bring your ideas to life and help you achieve your goals.
              </p>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
