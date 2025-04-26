'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal portfolio and blog site built with Next.js and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/placeholder.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Photography Collection',
    description: 'A curated collection of my best photography work from around the world.',
    tags: ['Photography', 'Travel', 'Art Direction'],
    image: '/placeholder.jpg',
    link: '/gallery',
  },
  {
    id: 3,
    title: 'Mobile App Design',
    description: 'UI/UX design for a travel planning mobile application.',
    tags: ['UI/UX', 'Figma', 'Mobile Design'],
    image: '/placeholder.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with product management and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/placeholder.jpg',
    link: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projectVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export default function WorkPageContent() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => 
          tag.toLowerCase().includes(activeFilter.toLowerCase())
        )
      );

  return (
    <main className="container relative z-0">
      <h1 className="text-3xl font-bold mb-4">My Work</h1>
      <p className="text-xl text-gray-600 mb-8">Selected projects and creative endeavors</p>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['all', 'design', 'development', 'photography'].map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === filter
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors duration-300`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map(project => (
          <motion.div 
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={projectVariants}
          >
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="inline-block px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
} 