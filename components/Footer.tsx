// src/components/Footer.tsx
'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDribbble, FaEnvelope } from 'react-icons/fa';
import { MagneticElement } from './MagneticElement';
import { FaEnvelopeCircleCheck } from 'react-icons/fa6';

// Array of social media profiles
const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: '#' },
  {name: 'Twitter', icon: FaTwitter, url: '#' },
  { name: 'LinkedIn', icon: FaLinkedin, url: '#' },
  { name: 'Email', icon: FaEnvelopeCircleCheck, url: '#' },
];

const Footer = () => {


  return (
    <footer id="contact" className="bg-black/30 backdrop-blur-sm py-12">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="max-w-md mx-auto mb-8 text-gray-400">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 inline-flex items-center gap-2"
        >
          <FaEnvelope /> Say Hello
        </a>

        <div className="mt-10 flex justify-center flex-wrap gap-8">
  {socialLinks.map((link) => (
    <MagneticElement key={link.name}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.name}
        className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
      >
        <link.icon size={30} />
      </a>
    </MagneticElement>
  ))}
</div>
        <p className="mt-10 text-gray-500 text-sm">
          Designed & Built by Your Name © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
