// src/components/Loader.tsx
'use client';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Loader = () => {
  const text = "Portfolio".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white flex"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {text.map((char, index) => (
          <motion.span key={index} variants={charVariants} className="inline-block">
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};