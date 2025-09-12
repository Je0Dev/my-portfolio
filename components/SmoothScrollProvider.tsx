// src/components/SmoothScrollProvider.tsx
'use client';
import { ReactLenis, useLenis } from 'lenis/react';
// ⛔ REMOVE: import Lenis from 'lenis'
// ✅ CHANGE: The whole component now uses the official React wrapper
function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrollProvider;