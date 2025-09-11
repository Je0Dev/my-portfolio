// src/components/Blog.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';


// Placeholder data for your blog posts
const posts = [
  {
    title: 'Building My Portfolio with Next.js and Framer Motion',
    date: 'September 10, 2025',
    excerpt: 'A deep dive into the technologies and design choices behind this very website, and the lessons I learned along the way.',
    tags: ['Next.js', 'React', 'Web Dev'],
  },
  {
    title: 'The Power of 3D in Modern Web Design',
    date: 'August 22, 2025',
    excerpt: 'Exploring how React Three Fiber is changing the game for creating immersive web experiences without sacrificing performance.',
    tags: ['Three.js', 'Design', 'Frontend'],
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest <span className="text-cyan-400">Posts</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg group hover:bg-gray-800 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:underline">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;