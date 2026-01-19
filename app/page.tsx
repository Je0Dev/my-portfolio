'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { LiquidNav } from '@/components/LiquidNav';

// Dynamically import heavy components
const About = dynamic(() => import("@/components/About"));
const Projects = dynamic(() => import("@/components/Projects"));
const Blog = dynamic(() => import("@/components/Blog"));
const Footer = dynamic(() => import("@/components/Footer"));
const Timeline = dynamic(() => import('@/components/Timeline').then(mod => mod.Timeline));
const SpotlightSection = dynamic(() => import('@/components/SpotlightSection').then(mod => mod.SpotlightSection));
const BentoGrid = dynamic(() => import('@/components/BentoGrid').then(mod => mod.BentoGrid));


export default function Home() {
  const { scrollYProgress } = useScroll();

  // Define a color gradient that changes based on scroll position
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1], // Points in the scroll progress (0=top, 1=bottom)
    ['#111827', '#1f2937', '#374151', '#4b5563', '#111827'] // Corresponding background colors
  );


  return (

    <motion.main
      style={{ backgroundColor }} // Apply the dynamic background color here
      className="transition-colors duration-300"
    >

<LiquidNav />
      <Navbar />
      <Hero />
      <About />
      <BentoGrid />
      <Timeline />
      <SpotlightSection> {/* Wrap the Projects component */}
        <Projects />
      </SpotlightSection>
      <SpotlightSection> {/* Wrap the Blog component */}
        <Blog />
      </SpotlightSection>
      <Footer />
    </motion.main>
  );
}
