// src/components/Timeline.tsx
'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'; // Icons for different milestone types

// Enriched data for your personal journey
const milestones = [
  { 
    type: 'education', 
    title: 'B.Sc. Computer Science', 
    description: 'National and Kapodistrian University of Athens', 
    date: '2019 - 2023',
    position: { x: 200, y: 100 }, 
    range: [0, 0.2] 
  },
  { 
    type: 'project', 
    title: 'First React App', 
    description: 'A social media dashboard with live data.',
    date: '2022',
    position: { x: 120, y: 300 }, 
    range: [0.2, 0.4] 
  },
  { 
    type: 'job', 
    title: 'Frontend Developer (Intern)', 
    description: 'Web Solutions Inc.',
    date: 'Summer 2023',
    position: { x: 280, y: 500 }, 
    range: [0.4, 0.6] 
  },
  { 
    type: 'job', 
    title: 'Full-Stack Engineer', 
    description: 'Creative Tech House',
    date: '2024 - Present',
    position: { x: 200, y: 700 }, 
    range: [0.6, 0.8] 
  },
];

// Map milestone types to icons and colors
const milestoneVisuals = {
  education: { icon: <FaGraduationCap />, color: '#3b82f6' }, // Blue
  job: { icon: <FaBriefcase />, color: '#8b5cf6' }, // Purple
  project: { icon: <FaCode />, color: '#10b981' }, // Green
};

const MilestoneNode = ({ milestone, progress, range }: { milestone: typeof milestones[0], progress: any, range: [number, number] }) => {
  const [hovered, setHovered] = useState(false);
  const start = range[0];
  const end = range[1];
  const midpoint = start + (end - start) / 2;
  const scale = useTransform(progress, [start, midpoint, end], [0.5, 1, 0.5]);
  const visuals = milestoneVisuals[milestone.type as keyof typeof milestoneVisuals];

  return (
    <motion.g
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="cursor-pointer"
    >
      <motion.circle cx="0" cy="0" r="12" fill={visuals.color} style={{ scale }} />
      <AnimatePresence>
        {hovered && (
          <motion.foreignObject x="-125" y="-100" width="250" height="90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <div className="p-3 bg-gray-900/80 backdrop-blur-sm text-white text-center rounded-lg shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span style={{ color: visuals.color }}>{visuals.icon}</span>
                <p className="font-bold text-white">{milestone.title}</p>
              </div>
              <p className="text-sm text-gray-300">{milestone.description}</p>
              <p className="text-xs text-gray-500 mt-1">{milestone.date}</p>
            </div>
          </motion.foreignObject>
        )}
      </AnimatePresence>
    </motion.g>
  );
};

export const Timeline = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start center", "end center"] });
  const pathLength = useSpring(useTransform(scrollYProgress, [0, 0.8], [0, 1]), { stiffness: 400, damping: 90 });

  return (
    <section ref={targetRef} id="timeline" className="py-20 text-white relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-12">My Journey</h2>
        <div className="relative w-full max-w-lg mx-auto h-[800px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="xMidYMax meet">
            <defs>{/* ... (filter remains the same) */}</defs>
            <motion.path d="M 200 0 V 100 C 200 200, 120 200, 120 300 S 280 400, 280 500 S 200 600, 200 700 V 800" fill="none" stroke="#00ffff" strokeWidth="5" style={{ pathLength, filter: 'url(#neon-glow)' }} />
            {milestones.map((milestone, i) => (
              <g key={i} transform={`translate(${milestone.position.x}, ${milestone.position.y})`}>
                <MilestoneNode milestone={milestone} progress={scrollYProgress} range={milestone.range as [number, number]}/>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};