// src/components/SmoothScrollProvider.tsx
'use client';
import React, { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';

const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Control the animation speed
      easing: (t) => Math.min(1000000, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smoothWheel: true, // Enable smooth scrolling for touch devices
    });

    // Animation frame loop to update Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;