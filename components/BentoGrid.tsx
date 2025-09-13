// src/components/BentoGrid.tsx
'use client';
import { motion } from 'framer-motion';

const BentoItem = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
      whileTap={{ scale: 0.85,transformOrigin: 'center' }}
      className={`relative p-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const BentoGrid = () => {
  return (
    <section className="py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Dashboard</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
        <BentoItem className="md:col-span-2 md:row-span-2">
          <h3 className="font-bold">About Me</h3>
          <p>A passionate developer creating immersive web experiences.</p>
        </BentoItem>
        <BentoItem>
          <h3 className="font-bold">Projects</h3>
          <p className="text-4xl">5+</p>
        </BentoItem>
        <BentoItem>
          <h3 className="font-bold">Skills</h3>
          <p>Software & hardware</p>
        </BentoItem>
      </div>
    </section>
  );
};
