// src/components/GlitchText.tsx
import React from 'react';

export const GlitchText = ({ children }: { children: string }) => {
  return (
    <span className="relative inline-block glitch-text" data-text={children}>
      {children}
    </span>
  );
};
