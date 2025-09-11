// src/components/Projects.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectData = [
  {
    title: 'Project One',
    description: 'A brief description of the project, its purpose, and the value it provides.',
    image: 'https://via.placeholder.com/500x300', // Replace with your project image
    tags: ['React', 'Next.js', 'TailwindCSS'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Project Two',
    description: 'A second project description, showcasing different skills or technologies.',
    image: 'https://via.placeholder.com/500x300', // Replace with your project image
    tags: ['TypeScript', 'Node.js', 'Firebase'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Project Two',
    description: 'A second project description, showcasing different skills or technologies.',
    image: 'https://via.placeholder.com/500x300', // Replace with your project image
    tags: ['TypeScript', 'Node.js', 'Firebase'],
    liveLink: '#',
    repoLink: '#',
  },
    {
    title: 'Project Two',
    description: 'A second project description, showcasing different skills or technologies.',
    image: 'https://via.placeholder.com/500x300', // Replace with your project image
    tags: ['TypeScript', 'Node.js', 'Firebase'],
    liveLink: '#',
    repoLink: '#',
  },
    // Add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-cyan-400">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:opacity-50 transition-opacity duration-300"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400">
                    <FaExternalLinkAlt size={30} />
                  </a>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400">
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;